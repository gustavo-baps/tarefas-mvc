class Tarefa{
    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
    }
    static listarTarefas(){
        const db = require('./db');
        let tarefas = db.query("SELECT * FROM tarefas");
        return tarefas;
    }
    salvar(){
        const db = require('./db');
        let resp = db.query(`INSERT INTO tarefas (title) VALUES ('${this.title}')`);
        console.log(resp);
    }
}   

module.exports = Tarefa;