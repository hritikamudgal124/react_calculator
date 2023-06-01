
const displayStyle = {
    backgroundColor: "#000000",
    height: "5rem",
    color: "#ffffff",
    padding: "12px 15px",
    fontSize: "15px",
    textAlign: "right",
    fontFamily: "'Space Mono', monospace",
    border: "1px solid #008e9b"
}

let Display = ({value}) => {
    return (
        <div style={displayStyle}>
            {value}
        </div>
    );
}

export default Display;