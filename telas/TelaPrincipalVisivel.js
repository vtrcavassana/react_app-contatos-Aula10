import { connect } from 'react-redux';
import TelaPrincipal from './TelaPrincipal';
import { delContato } from '../reducer/Acoes';

const mapStateToProps = state => {
	return {

	};
}

const mapDispatchToProps = dispatch => {
	return {
		removerContato: packet => dispatch(delContato(packet)),
	};
}

const TelaPrincipalVisivel = connect(mapStateToProps, mapDispatchToProps)(TelaPrincipal);

export default TelaPrincipalVisivel;