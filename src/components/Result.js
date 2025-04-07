import React from 'react';
import Classification from './Classification';
import IdealWeight from './IdealWeight';
import { Text, StyleSheet } from 'react-native';

//Componente que exibi ao usuário o resultado do IMC, a classificação e o peso ideal
const Result = ({imc, classification, pesoMin, pesoMax}) => {
    return (
        <>
            <Text style={styles.result}>Seu IMC é: {imc}</Text>
            {classification && <Classification resultado={classification} />}
            {(pesoMin && pesoMax) && <IdealWeight min={pesoMin} max={pesoMax} />}
        </>
    );
};

//Constante que guarda os estilos do componente
const styles = StyleSheet.create({
    result: {
        marginTop: 30,
        fontSize: 24,
        textAlign: 'center',
        color: '#A0522D',
    },
});

export default Result;