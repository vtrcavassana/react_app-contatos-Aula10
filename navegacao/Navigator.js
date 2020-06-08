import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { Platform } from "react-native";
import Cores from "../cores/Cores";

import TelaDetalhesVisivel from '../telas/TelaDetalhesVisivel';
import TelaPrincipalVisivel from '../telas/TelaPrincipalVisivel';
import TelaNovoVisivel from '../telas/TelaNovoVisivel';

const Navigator = createStackNavigator(
    {
        TelaPrincipal: TelaPrincipalVisivel,
        TelaDetalhes: TelaDetalhesVisivel,
        TelaNovo: TelaNovoVisivel
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Cores.primary : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
        }
    });

export default createAppContainer(Navigator);