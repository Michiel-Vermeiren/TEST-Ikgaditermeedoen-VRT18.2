import * as React from 'react';
import {
    TreeList, mapTree, extendDataItem,TreeListCellProps, getSelectedState, getSelectedStateFromKeyDown, TreeListExpandChangeEvent, TreeListSelectionChangeEvent, TreeListKeyDownEvent
} from '@progress/kendo-react-treelist';
import { getter } from '@progress/kendo-react-common';
import { AreaLocation } from '../../2-PAGES/BOTTOM/ORGANIZATION/AREAS/Interfaces';

import { Button } from '@progress/kendo-react-buttons';

const EXPAND_FIELD: string = 'expanded';
const SELECTED_FIELD: string = 'selected';

interface LeftListViewProps {
  data: any[];
  columns: any[];
  onRowSelect: (id: string | null) => void;
  selectedState: { [id: string]: boolean };
  setSelectedState: React.Dispatch<React.SetStateAction<{ [id: string]: boolean }>>;
  dataItemKey: string; // New prop for data item key
  subItemsField: string; // New prop for sub-items field
}


const MyCell = (props: TreeListCellProps) => {
  const { dataItem } = props;
  const field = props.field || "";
  const cellData = dataItem[field];
  const onExpand = () => {
    //    alert(`Facility ID: ${String(cellData)}`);
  };
  
  return (
        <td height={15}>
        {cellData < 10 && (
          <Button
          style={{ height: 30, marginTop: 0, marginBottom: 0 }}
          className="k-grid-edit-command"
          onClick={onExpand}
          >
            Add Location
          </Button>
        )}
      </td>
    );
  };
  
  
  
  const LeftListView: React.FC<LeftListViewProps>= ({data,columns, onRowSelect, selectedState, setSelectedState,dataItemKey, subItemsField}) => {
    
    const [dataState] = React.useState<AreaLocation[]>(data.slice());  
    const [expandedState, setExpandedState] = React.useState<{[n: number]: boolean}>({1: true, 2: true, 32: true});
    
    const idGetter = getter(dataItemKey); // Use prop instead of constant

    const extendData = (dataState: any[], selectedState: { [x: string]: any; }, expandedState: { [x: string]: any;[x: number]: boolean; }) => {
      return mapTree(dataState, subItemsField, (item) => // Use prop instead of constant
          extendDataItem(item, subItemsField, { // Use prop instead of constant
              selected: selectedState[idGetter(item)],
              expanded: expandedState[idGetter(item)]
          })
      );
    };
    const onExpandChange = React.useCallback(
      (e: TreeListExpandChangeEvent) => {
            setExpandedState({...expandedState, [idGetter(e.dataItem)]: !e.value})
          },
          [expandedState]
          );
          
          const onSelectionChange = React.useCallback(
            (event: TreeListSelectionChangeEvent) => {
              const newSelectedState = getSelectedState({
              event,
              selectedState: selectedState,
              dataItemKey: dataItemKey
            });
          
           
            const booleanState = Object.keys(newSelectedState).reduce((state, key) => {
        state[key] = Boolean(newSelectedState[key]);
        return state;
      }, {} as { [id: string]: boolean });
  
      setSelectedState(booleanState);
  
      // Find the selected ID and call the callback
      const selectedID = Object.keys(booleanState).find(id => booleanState[id]);
      // alert('kan ik dit zien' + selectedID);

      //onRowSelect is hier afkomstig van parent component => wordt daar gecalled

      onRowSelect(selectedID || null);
     alert('selected verdwijnt hier '+selectedID || null);
        },
        [selectedState]
            // Convert the state to a strictly boolean map
    
        
    );

    const onKeyDown = (event: TreeListKeyDownEvent) => {
        const newSelectedState = getSelectedStateFromKeyDown({
            event,
            selectedState: selectedState,
            dataItemKey: dataItemKey
        });      
    }


    return (
      <div>
        <TreeList
          style={{height:'512px',marginTop:-12 ,width:'617px',  marginLeft:'-16px', overflow: 'auto' }}
          data={extendData(dataState, selectedState, expandedState)}
          columns={columns}
          selectedField={SELECTED_FIELD}
          expandField={EXPAND_FIELD}
          subItemsField={subItemsField}
          dataItemKey={dataItemKey}          
          selectable={{
            enabled: true,
            drag: false,
            cell: false,
            mode: 'single'
          }}
          navigatable={true}
          onSelectionChange={onSelectionChange}
          onExpandChange={onExpandChange}
          onKeyDown={onKeyDown}

        
        />
      </div>
      );
};

export default LeftListView; 
