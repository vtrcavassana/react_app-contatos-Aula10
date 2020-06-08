import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Platform } from 'react-native'

import Cores from '../cores/Cores'


const BotaoCabecalho = (props) => {
    return (
        <HeaderButton
            {...props}
            iconSize={24}
            color={Platform.OS === 'android' ? 'white' : Cores.primary}
        />

    );
};
export default BotaoCabecalho;