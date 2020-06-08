import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import Medidas from '../medidas/Medidas';
import Cores from '../cores/Cores';
import TiraFoto from '../componentes/TiraFoto';

const TelaDetalhes = ({ route, navigation, contatos, salvarContato }) => {

  const id = navigation.getParam('id');
  const contato = contatos.filter(contato => contato.id == id)[0];

	const [editar, setEditar] = useState(false);

	const [nome, setNome] = useState(contato.nome);
	const [telefone, setTelefone] = useState(contato.telefone);
  const [uri, setUri] = useState(contato.uri);

	const capturaNome = (nome) => {
		setNome(nome);
	}

	const capturaTelefone = (telefone) => {
		setTelefone(telefone);
	}

  const capturaUri = (uri) => {
    setUri(uri);
  }

	let bttnTitle
	if(editar){
		bttnTitle = "Salvar";
	}
	else{
		bttnTitle = "Editar";
	}

	return (
    	<View style = {styles.contato}>
            <TextInput
              placeholder = "Nome"
              style = {styles.contatoInputText}
              onChangeText = {capturaNome}
              value = {nome}
              editable = { editar }
            />
            <TextInput
              placeholder = "Telefone"
              style = {styles.contatoInputText}
              onChangeText = {capturaTelefone}
              value = {telefone}
              editable = { editar }
              keyboardType = {'number-pad'}
            />
            <TiraFoto
              onFotoTirada={ capturaUri }
              uri={ uri }
            />
            <View style = {styles.botoes}>
            	<Button
              		title = { bttnTitle }
              		onPress = {() => {
              			if(editar){
                      salvarContato({id, nome, telefone, uri});
                      navigation.goBack();
              			}else{
              				setEditar(true);
              			}
              		}}
            	/>
            	<Button
              		title = "Voltar"
              		onPress = {() => {
              			if(editar){
              				setEditar(false);
              			}else{
              				navigation.goBack();
              			}
              		}}
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

export default TelaDetalhes;