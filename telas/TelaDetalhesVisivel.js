import { connect } from 'react-redux';
import TelaDetalhes from './TelaDetalhes';
import { savContato } from '../reducer/Acoes';

const mapStateToProps = state => {
	return {
		contatos: state.contatos,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		salvarContato: contato => dispatch(savContato(contato)),
	};
}

const TelaDetalhesVisivel = connect(mapStateToProps, mapDispatchToProps)(TelaDetalhes);

export default TelaDetalhesVisivel;