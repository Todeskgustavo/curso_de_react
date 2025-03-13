import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
   const[title, setTitle] = useState("");
   const[description, setDescription] = useState("");
   
    return (
   <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
        <input type="text" 
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"  
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />
        <input type="text" 
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"  
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        />
        <button onClick={() => {
            // Verificar se o título e a descrição estão preenchidos
            if (!title.trim() || !description.trim()) {
                return alert("Preencha o título e a descrição da tarefa.");
            }
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
        }} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
    </div>
    );
}

export default AddTask