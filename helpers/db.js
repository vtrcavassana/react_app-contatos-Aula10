import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('lugares.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {

        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_contato (id INTEGER PRIMARY KEY, key TEXT NOT NULL, nome TEXT NOT NULL, uri TEXT NOT NULL, telefone TEXT NOT NULL);',
                [],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
}

export const inserirContato = (key, nome, uri, telefone) => {
    const promise = new Promise((resolve, reject) => {

        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO tb_contato (key, nome, uri, telefone) VALUES (?,?,?,?);',
                [key, nome, uri, telefone],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
}

export const apagarContato = key => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM tb_contato WHERE key = ?;',
                [key],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;    
}

export const mudarContato = contato => {
    const promise = new Promise((resolve, reject) => {

        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE tb_contato SET nome = ?, uri = ?, telefone = ? WHERE key = ?;',
                [contato.nome, contato.uri, contato.telefone, contato.id],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;    
}

export const buscarContatos = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM tb_contato',
                [],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
} 