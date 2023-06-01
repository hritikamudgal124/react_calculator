import './styles/buttons.css';

const rowStyle = {
    display: "flex", 
}

let Buttons = ({data, onClick}) => {
    return (
        <div className="container">
            {data && data.map((item, index) => {
                return <div style={rowStyle} key={`btnRow_${index}`}> 
                    {item && item.map((label, lindex) =>  label !== "" ?  <button onClick={onClick} key={`btnitem_${lindex}`} className="button">{label}</button > : <span key={`btnitem_${lindex}`}></span>)}
                </div>
            })}
        </div>
    );
}

export default Buttons;