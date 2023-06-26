class Tarefa{
    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
    }
}
listarTarefas(){
    const db = require('./database');
    let tarefas = db.query("SELECT * FROM tarefas");
}

module.exports = Tarefa;