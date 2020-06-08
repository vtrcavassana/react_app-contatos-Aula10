import { CONTATO, ID } from './Acoes';

const contatos = (state, action) => {
	const switcher = {
		[CONTATO.ADD_CONTATO]: () => [...state, action.contato],
		[CONTATO.DEL_CONTATO]: () => state.filter(contato => contato.id != action.id),
		[CONTATO.SAV_CONTATO]: () => state.map(contato => contato.id == action.contato.id? action.contato: contato),
		[CONTATO.RFS_CONTATO]: () => action.contatos.map(c => {
			return {
				id: c.key, 
				nome: c.nome, 
				telefone: c.telefone,
				uri: c.uri
			};
		}),
		'default': () => state
	};
	return (switcher[action.type] || switcher['default'])();
}

const id = (state, action) => {
	const switcher = {
		[ID.NXT_ID]: state + 2,
		'default': state
	};
	return switcher[action.type] || switcher['default'];
}

const initState = {
	contatos: [],
	id: 10
};

const reducer = (state = initState, action) => {
	return {
		contatos: contatos(state.contatos, action),
		id: id(state.id, action)
	};
}

export default reducer;
