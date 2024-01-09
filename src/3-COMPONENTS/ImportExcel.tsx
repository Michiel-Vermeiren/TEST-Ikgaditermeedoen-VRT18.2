import {Spreadsheet,SpreadsheetTab,Open} from "@progress/kendo-react-spreadsheet";// ES2015 module syntax

import { ToolbarSeparator } from "@progress/kendo-react-buttons";
import { Card } from "@progress/kendo-react-layout";
interface ImportExcelProps {
  tabText: string;
  sheetText?: string;
}
const ImportExcel: React.FC<ImportExcelProps> = ({ tabText="",sheetText }) => {
  const customTabs: SpreadsheetTab[] = [
    {
      text: tabText,
      selected: true,
      tools: [
        ToolbarSeparator,
        Open,
        ToolbarSeparator,
      ],
    },
  ];
    return (<>
 <Card style={{ height: "480px", width: "835px" }}>
 <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop:10,
          
        }}
      >
        <Spreadsheet
                   style={{
            width: "96%",
            height: 450,
            
         
          }}
          defaultProps={{ sheets: [{name:sheetText}] }}
          toolbar={customTabs}
        />
      </div>
   
     </Card>
    </>  );
}
 
export default ImportExcel;

/**
 * '
      <Spreadsheet
      style={{       
        width: 840,
        height: 520,
        paddingLeft:20,
        paddingTop:5,
        paddingBottom:5,       
      }}
      defaultProps={{ sheets: [{name:sheetText}] }}
      toolbar={customTabs}
      
    />'
 * 
 */