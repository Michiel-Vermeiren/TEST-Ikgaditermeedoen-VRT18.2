import { Menu, MenuSelectEvent } from "@progress/kendo-react-layout";

interface DetailMenuProps {
 items ?: any[]; // Accept an array of menu items
  onSelect?: (event: MenuSelectEvent) => void; // Optional onSelect function
  title?: string; // Optional title
}

const DetailMenu: React.FC<DetailMenuProps> = ({ items, onSelect, title }) => {

  // Check if onSelect is provided
  const isSelectable = typeof onSelect === 'function';

  return (
    <div style={{
      height: "44px",
      width: "620px",
      marginLeft: "-15px",
      marginRight: "-15px",
      display: "flex",
      alignItems: "center",
    }}>
      {isSelectable ? (
        // Render the Menu if onSelect is provided
        <Menu items={items} onSelect={onSelect} />
      ) : (
        // Otherwise, display the title as plain text
        <span style={{
          height: "44px",
          width: "620px",
          marginLeft: "10px",
          marginRight: "-15px",
          display: "flex",
          alignItems: "center",
        }}>{title}</span>
      )}
    </div>
  );
};

export default DetailMenu;

