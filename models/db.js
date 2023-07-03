const mysql = require('mysql2/promise');
    /**
     * metodo responSavel pela conexão com o banco de dados
     */
    async function connect(){
        try{
            const conexao = await mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'tarefas_db'
            });
            console.log("funcionou");
            return conexao;
        }catch(error){
            console.log("nao fode: ", error);
            throw error;
        }
    }
    /**
     * metodo responSavel pela execução de um query no banco de dados
     */
    async function query(sql){
        const conexao = await connect();
        try{
            const [rows] = await conexao.execute(sql);
            console.log(rows);
            console.log("query executada");

            return rows;
        }catch(error){
            console.log("erro ao executar query: ",error);
            throw error;
        }finally{
            if(conexao){
                conexao.end();
                console.log("conexao encerrada");
            }
        }
    }
module.exports = {query};