import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import Medidas from '../medidas/Medidas';
import Cores from '../cores/Cores';
import TiraFoto from '../componentes/TiraFoto';

const TelaNovo = ({ route, navigation, id, criarContato }) => {
	const [nome, setNome] = useState('');
	const [telefone, setTelefone] = useState('');
  const [uri, setUri] = useState();

	const capturaNome = (nome) => {
		setNome(nome);
	}

	const capturaTelefone = (telefone) => {
		setTelefone(telefone);
	}

  const capturaUri = (uri) => {
    setUri(uri);
  }

	return (
    	<View style = {styles.contato}>
            <TextInput
              placeholder = "Nome"
              style = {styles.contatoInputText}
              onChangeText = {capturaNome}
              value = {nome}
            />
            <TextInput
              placeholder = "Telefone"
              style = {styles.contatoInputText}
              onChangeText = {capturaTelefone}
              value = {telefone}
              keyboardType = {'number-pad'}
            />
            <TiraFoto
              onFotoTirada={ capturaUri }
            />
            <View style = {styles.botoes}>
            	<Button
              		title = "Salvar"
              		onPress = {
                    () => {
                      criarContato({id, nome, telefone, uri});
                      navigation.goBack();
                    }
                  }
            	/>
            	<Button
              		title = "Voltar"
              		onPress = {() => navigation.goBack()}
            	/>
            </View>
        </View>
	);
}

const styles = StyleSheet.create({
    contato: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    contatoInputText: {
      width: Medidas.width80,
      borderBottomColor: Cores.preto,
      borderBottomWidth: Medidas.borderBottomWidth1,
      padding: Medidas.padding2,
      marginBottom: Medidas.marginBottom8
    },
    botoes: {
	  flexDirection: 'row',
	  flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
});

export default TelaNovo;