function AddTask() {
   return (
   <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
        <input type="text" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"  placeholder="Digite o título da tarefa"/>
        <input type="text" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"  placeholder="Digite a descrição da tarefa"/>
        <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
    </div>
    );
}

export default AddTask