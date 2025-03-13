export default function Input({ placeholder, type = "text", value, onChange }) {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            style={{ 
                width: "200px", 
                padding: "12px", 
                marginBottom: "10px", 
                borderRadius: "5px", 
                border: "1px solid #ccc" 
            }} 
        />
    );
}
