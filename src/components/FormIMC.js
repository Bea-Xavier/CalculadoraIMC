import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import { useState } from "react";


const FormIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classification, setClassification] = useState ('');

    const calcularIMC = () => {
        if (peso && altura) {
            const altutaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (altutaMetros * altutaMetros)).toFixed(2);
            setImc(imcCalculado);
        }

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
    };


    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} />
            {imc && <Result imc={imc} />}

        <Text Classification />

        </View>
    );

};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default FormIMC;
