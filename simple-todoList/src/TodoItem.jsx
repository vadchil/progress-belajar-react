function TodoItem({text, onDelete}) {
    return (
        <div style={{ display: "flex", gap: "10px", marginBottom: "5px"}}>
            <span>{text}</span>
            <button onClick={onDelete}>X</button>
        </div>
    );    
}

export default TodoItem