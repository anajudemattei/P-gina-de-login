export default function Button({ text, onClick }) {
    return (
        <button 
            onClick={onClick} 
            style={{ 
                padding: "10px 15px",
                borderRadius: "5px", 
                background: "linear-gradient(80deg, rgb(130, 240, 120) 0%, rgb(90, 245, 193) 33%, rgb(58, 241, 186) 66%, rgb(130, 240, 120) 100%)", 
                color: "#fff", 
                border: "none", 
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap"
            }}
        >
            {text}
        </button>
    );
}
