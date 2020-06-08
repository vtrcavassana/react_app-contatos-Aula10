import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Medidas from '../medidas/Medidas';

const ContatoItem = (props) => {
  return (
    <View style = {styles.listaDeContatos}>
      <Text>{props.id}</Text>
      <Text>{props.nome}</Text>
      <Text>{props.telefone}</Text>
      <Image
        style={styles.imagem}
        source={{ uri: props.uri }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  listaDeContatos: {
    padding: Medidas.padding12,
    //backgroundColor: Cores.cinza,
    //borderColor: Cores.preto,
    //borderWidth: Medidas.borderBottomWidth1,
    marginBottom: Medidas.marginBottom8,
    borderRadius: Medidas.borderRadius8
  },
  imagem: {
        width: 70,
        height: 70,
        borderRadius: 8
  }
});

export default ContatoItem;