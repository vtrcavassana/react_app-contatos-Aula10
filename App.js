import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducer/Reducer';
import Navigator from './navegacao/Navigator';
import { init } from './helpers/db';

init()
  .then((resultado) => {
    console.log("Deu certo a criação da base: " + JSON.stringify(resultado));
  })
  .catch((err) => {
    console.log("Falhou a criação da base: " + JSON.stringify(err));
  });


const store = createStore(reducer, applyMiddleware(reduxThunk));

export default function App() {
  return (
  	<Provider store={ store }>
  		<Navigator/>
  	</Provider>
  );
}