
  interface BottomMenuItem {
    class?:string;
    text: string;
    id?: string ;
    icon: string;
    selected?: boolean;
    route: string;
  }


  

export const bottomMenuItems : BottomMenuItem[] = [
  {  text: "Users",  id: "1",icon: "user" ,route: ""},
  {  text: "Organization",  id: "2",icon: "style-builder" ,route: "/Organization" },
  {  text: "Market", id: "3", icon: "cart",route: "/Market" },
  {  text: "Solutions", id: "4", icon: "wrench",route: "/Solutions" },
  {  text: "Reports", id: "5", icon: "file-pdf" ,route: "/Reporting"},
  {  text: "Account", id: "6", icon: "user" ,route: "/Account"},
  ];

export type Item = {
    class:string;
    text: string;
    id: number ;
    icon: string;
    selected?: boolean;
    route: string;
  }




 
export type MainMenuLink = {
  path:string;
  label: string;
}

  export const mainMenuLinks : MainMenuLink[] = [
    { path: '/Paths/Management', label: 'Paths' },
    { path: '/Empacto/Current', label: 'Empacto' },
    { path: '/Claims/Gps', label: 'Claims ' },
  ];

  export type SideMenuLink = {
    name:string;
    title: string;
  }
  
  export const ExpectedLinks : SideMenuLink[] = [
    { name: 'Quotes', title: 'Quotes' },
    { name: 'Orders', title: 'Orders' },
    { name: 'Commits', title: 'Commits ' },
  ];

  






  /**LEFTGRID  columns*/


  export const LeftGridColumns =[
  {
    "field": "ID",
    "title": "ID",
    "width": "40px"
  },
  {
    "field": "Name",
    "title": "User",
    "width": "160px"
  },
  {
    "field": "Admin",
    "title": "Admin",
    "width": "90px",
    "cell": "CheckboxCell"
  },
  {
    "field": "Director",
    "title": "Director",
    "width": "90px",
    "cell": "CheckboxCell"
  },
  {
    "field": "Manager",
    "title": "Manager",
    "width": "90px",
    "cell": "CheckboxCell"
  },
  {
    "field": "Operator",
    "title": "Operator",
    "width": "90px",
    "cell": "CheckboxCell"
  }
]


//***START - SETUP******** */


/**
 * import EUDRForm from "../0-LAYOUT/FORMS/EUDRForm";

export const SetupMenuItems: MenuItem[] = [
  {
    text: "New EUDR", 
    data: {
      title:"New EU Deforestation Directive setup 22222",
      route: "EUDRForm",
      form: <EUDRForm  />
    }
  },
  
    // ... add other menu items as needed
];
 * 
 */



//***Data Setup - leftgrid */
export interface SetupInterface {
  ID:number;
  Name: string;
  StartDate: string ;
  Active: boolean ;
  Directive: string ;
}

export const SetupData = [
    {
      'ID': 1,
      'Name': "Geert Setup",      
      'StartDate':'12/12/2023',
      'Active': true,
      'Directive': 'EUDR',       
    },
    {
      'ID': 2,
      'Name': "Michiel Setup",      
      'StartDate':'1/1/2025',
      'Active': false,
      'Directive': 'EUWFD',
    },
    {
      'ID': 3,
      'Name': "Patrizia d´Aversa setup",             
      'Admin':true,
      'StartDate':'1/4/2025',
      'Active': false,
      'Directive': 'EUDR',
    },
    
  ]

  /**SETUPGRID  columns*/


  export const SetupGridColumns =[
    {
      "field": "ID",
      "title": "ID",
      "width": "40px"
    },
    {
      "field": "Name",
      "title": "Name",
      "width": "140px"
    },
    {
      "field": "StartDate",
      "title": "Start date",
      "width": "90px",   
    },
    {
      "field": "Active",
      "title": "Active",
      "width": "90px",
      "cell": "CheckboxCell"
    },
    {
      "field": "Directive",
      "title": "Directive",
      "width": "90px",      
    }
    
  ]

 
  //***END - SETUP******** */


  //** STEPPER  */

  //*ACTIVITIES***/

  //***Data Setup - leftgrid */
export interface Activity {
  ID:number;
  Name: string; 
  Active: boolean ;

}

export const ActivitiesData = [
    {
      'ID': 1,
      'Name': "harvesting",   
      'Active': true,
         
    },
    {
      'ID': 2,
      'Name': "Proper transport to Silo",   
      'Active': false,
   
    },
    {
      'ID': 3,
      'Name': "Storage in silo",  
      'Active': false,
    },
    {
      'ID': 4,
      'Name': "Proper transport to Crusher",  
      'Active': false,
    },
    {
      'ID': 5,
      'Name': "Crushing oil",  
      'Active': false,
    },
    {
      'ID': 6,
      'Name': "Crushing spread",  
      'Active': false,
    },
    {
      'ID': 7,
      'Name': "Proper transport oil to Port",  
      'Active': false,
    },
    {
      'ID': 8,
      'Name': "Proper transport spread to Port",  
      'Active': false,
    },
    {
      'ID': 9,
      'Name': "Shipping to Europe",  
      'Active': false,
    },
  ]

  export const ActivityColumns =[
    {
      "field": "ID",
      "title": "ID",
      "width": "40px"
    },
    {
      "field": "Name",
      "title": "Name",
      "width": "535px"
    },       
  
    
  ]