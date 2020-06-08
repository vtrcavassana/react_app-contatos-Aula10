import { connect } from 'react-redux';
import TelaNovo from './TelaNovo';
import { addContato, nextId } from '../reducer/Acoes';

const mapStateToProps = state => {
	return {
		id: state.id,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		criarContato: contato => {
			dispatch(addContato(contato));
			dispatch(nextId());
		},
	};
}

const TelaNovoVisivel = connect(mapStateToProps, mapDispatchToProps)(TelaNovo);

export default TelaNovoVisivel;