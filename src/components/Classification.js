import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import React from 'react';

const Classification = ({ imc }) => {  
    if ({imc} < 18.5) {
        return <Text style={styles.classification}>Abaixo do peso</Text>;
    } else if ({imc} >= 18.5 && imc <= 24.9) {
        return <Text style={styles.classification}>Peso normal</Text>;
    } else if ({imc} >= 30 && imc <= 34.9) {
        return <Text style={styles.classification}>Obesidade Grau 1</Text>;
    } else if ({imc} >= 35 && imc <= 39.9) {
        return <Text style={styles.classification}>Obesidade Grau 2</Text>;
    } else if ({imc} >= 40) {
        return <Text style={styles.classification}>Obesidade Grau 3</Text>;
    }
    return null;  
};

const styles = StyleSheet.create({
    classification: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default Classification;