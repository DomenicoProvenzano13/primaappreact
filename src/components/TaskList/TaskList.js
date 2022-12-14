import { useState } from "react";
import "./TaskList.css";

function TaskList() {
    const [lista, setLista] = useState([]);
    let str = ''

    const submit = (e) => {
        e.preventDefault();
        let nuovalista = [...lista, str];
        setLista(nuovalista);
    };

    const handleChange = (e) => {
        str = e.target.value;
    };

    return (
        <div>
            <h1>To Do List</h1>
            <form onSubmit={submit} className="tasklist">
                <label htmlFor="task">Inserisci nuovo task:</label>
                <div>
                    <input type="text" id="task" onChange={handleChange} />
                    <button type="submit" value="submit">
                        Invia
                    </button>
                </div>
            </form>
            {lista.map((elem, i) => (
                <li key={i}>{elem}</li>
            ))}
        </div>
    );
}

export default TaskList;