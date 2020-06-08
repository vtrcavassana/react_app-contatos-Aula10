import * as FileSystem from 'expo-file-system';
import { buscarContatos, inserirContato, apagarContato, mudarContato } from '../helpers/db';

const CONTATO = {
	ADD_CONTATO: 'ADD_CONTATO',
	DEL_CONTATO: 'DEL_CONTATO',
	SAV_CONTATO: 'SAV_CONTATO',
	RFS_CONTATO: 'READ_FROM_STORAGE_CONTATO'
};

const ID = {
	NXT_ID: 'NXT_ID',
};

const addContato = (contato) => {
    return async dispatch => {
        //file://diretorio/outrodiretorio/nome.png
        const nomeArquivo = contato.uri.split("/").pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        try {
            await FileSystem.moveAsync({
                from: contato.uri,
                to: novoPath
            });
            const resultadoBD = await inserirContato(
                contato.id,
                contato.nome,
                novoPath,
                contato.telefone
            );
            console.log(JSON.stringify(resultadoBD));
            dispatch({ type: CONTATO.ADD_CONTATO, contato: {...contato, uri: novoPath} })
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}

const delContato = (packet) => {
    return async dispatch => {
        try {
            await FileSystem.deleteAsync(packet.uri);
            const resultadoBD = await apagarContato(packet.id);
            console.log(JSON.stringify(resultadoBD));
            dispatch({ type: CONTATO.DEL_CONTATO, id: packet.id })
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}

const savContato = (contato) => {
    return async dispatch => {
        const nomeArquivo = contato.uri.split("/").pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        try {
            await FileSystem.moveAsync({
                from: contato.uri,
                to: novoPath
            });
            const resultadoBD = await mudarContato(
                {...contato, uri: novoPath}
            );
            console.log(JSON.stringify(resultadoBD));
            dispatch({ type: CONTATO.SAV_CONTATO, contato: {...contato, uri: novoPath} })
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}

const nextId = () => {
	return {type: ID.NXT_ID};
}

const rfsContato = () => {
    return async dispatch => {
        try {
            const resultadoDB = await buscarContatos();
            dispatch({ type: CONTATO.RFS_CONTATO, contatos: resultadoDB.rows._array });

        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export {
	CONTATO,
	ID,	
	addContato,
	delContato,
	savContato,
	rfsContato,
	nextId
};