import React, { useState, useEffect } from 'react';
import { View, Alert, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { rfsContato } from '../reducer/Acoes';
import { useSelector, useDispatch } from 'react-redux';

import ContatoInput from '../componentes/ContatoInput';
import ContatoItem from '../componentes/ContatoItem';
import ContatoCartao from '../componentes/ContatoCartao';
import BotaoCabecalho from '../componentes/BotaoCabecalho';

const TelaPrincipal = ({ route, navigation, removerContato }) => {

  const contatos = useSelector(state => state.contatos);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rfsContato())
  }, [dispatch]);

  const editarContato = idASerEditada => navigation.navigate({routeName: 'TelaDetalhes', params: {id: idASerEditada}});

  const apagarContato = (idASerApagada) => {
    Alert.alert(
      "Apagar contato?",
      "Essa ação não podera ser revertida!",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Apagar", onPress: () => removerContato(idASerApagada) }
      ],
      { cancelable: true }
    );
  }

	return (
      <View>
        <FlatList
          data = { contatos }
          renderItem = {
            contato => (
              // Mostra o ID (10) + nome + tel
              <ContatoCartao
                id = {contato.item.id}
                nome = {contato.item.nome}
                telefone = {contato.item.telefone}
                uri = {contato.item.uri}
                onDelete = {apagarContato}
                onEdit = {editarContato}
              />
            )
          }
        />
      </View>
	);
}

TelaPrincipal.navigationOptions = (dadosNav) => {
    return {
        headerTitle: 'Tela Principal',
        headerRight:
            <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate('TelaNovo') }}
                />
            </HeaderButtons>
    }
}

export default TelaPrincipal;