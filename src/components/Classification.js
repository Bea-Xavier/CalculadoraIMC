import { Text, StyleSheet } from 'react-native';
import React from 'react';

//Uma função que terá como retorno a classificação da Pessoa de acordo com o IMC
const Classification = ({ resultado }) => {
    return (
        <Text style={styles.classification}>Classificação: {resultado}</Text>
    );
};

//Constante que guarda os estilos do componente
const styles = StyleSheet.create({
    classification: {
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
        color: '#333',
    },
});

export default Classification;