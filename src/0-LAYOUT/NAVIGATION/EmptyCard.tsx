interface EmptyMessageProps {
    message:string; // Accept an array of menu items
   
  }
const EmptyCard: React.FC<EmptyMessageProps> = ({ message }) => {
    return (<>
      <div style={{ display: "flex", fontSize: '26px', justifyContent: "center", width: "auto", marginLeft: '200px', alignItems: "center", height: "400px" }}>
              <p>{message}</p>
            </div>
    </>  );
}
 
export default EmptyCard;