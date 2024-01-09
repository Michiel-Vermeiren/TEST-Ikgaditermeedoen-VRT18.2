import icon from '../../../0-LAYOUT/assets/fbl.png';
const Fbl = () => {
    return (<>
    <div style={{ display: 'flex', alignItems: 'center' }}>
     
          <img
            src={icon} // Using the imported icon
            alt="Your Icon"
            style={{ width: 1100, height: 480, marginLeft:50 }} // Set the size to 40x40
          />
        </div>

    </>  );
}
 
export default Fbl;