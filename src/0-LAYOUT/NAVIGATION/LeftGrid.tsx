import React from 'react';
import { Grid, GridColumn, GridSelectionChangeEvent, getSelectedState } from "@progress/kendo-react-grid";
import { getter } from "@progress/kendo-react-common";

const DATA_ITEM_KEY = "ID";
const SELECTED_FIELD = "selected";
const idGetter = getter(DATA_ITEM_KEY);

interface LeftGridProps {
  data: any[];
  columns: any[];
  onRowSelect: (id: string | null) => void;
  selectedState: { [id: string]: boolean };
  setSelectedState: React.Dispatch<React.SetStateAction<{ [id: string]: boolean }>>;
}

const CheckboxCell = ({ dataItem, field }: any) => {
  return (
    <td>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <input type="checkbox" checked={dataItem[field]} readOnly />
      </div>
    </td>
  );
};

const LeftGrid: React.FC<LeftGridProps> = ({ data, columns,onRowSelect, selectedState, setSelectedState }) => {

  const onSelectionChange = (event: GridSelectionChangeEvent) => {
    const newSelectedState = getSelectedState({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });

    // Convert the state to a strictly boolean map
    const booleanState = Object.keys(newSelectedState).reduce((state, key) => {
      state[key] = Boolean(newSelectedState[key]);
      return state;
    }, {} as { [id: string]: boolean });

    setSelectedState(booleanState);

    // Find the selected ID and call the callback
    const selectedID = Object.keys(booleanState).find(id => booleanState[id]);
    onRowSelect(selectedID || null);
  };

  return (
    <Grid
      style={{ height: "510px", marginLeft: "-16px", marginRight: "-15px", marginTop: "-13px" }}
      resizable={true}
      data={data.map(item => ({
        ...item,
        [SELECTED_FIELD]: selectedState[idGetter(item)],
      }))}
      dataItemKey={DATA_ITEM_KEY}
      selectedField={SELECTED_FIELD}
      selectable={{
        enabled: true,
        drag: false,
        cell: false,
        mode: "single",
      }}
      navigatable={true}
      onSelectionChange={onSelectionChange}
    >
      {columns.map(column => (
        <GridColumn
          key={column.field}
          field={column.field}
          title={column.title}
          width={column.width}
          cell={column.cell === "CheckboxCell" ? CheckboxCell : undefined}
          
        />
      ))}
    </Grid>
  );
}

export default LeftGrid;
