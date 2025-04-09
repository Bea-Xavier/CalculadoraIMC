//Importação de outros componentes necessários
import { View, TextInput, Button, StyleSheet } from 'react-native';

import Result from './Result';
import Classification from './Classification';

import { useState } from "react";

//O componente FormIMC responável por receber os dados do usuário e calcular o IMC, em formato de função
const FormIMC = () => {
    //Variávies de funcionamento 
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classification, setClassification] = useState(null);
    const [pesoMin, setPesoMin] = useState(null);
    const [pesoMax, setPesoMax] = useState(null);

    //Lógica de cálculo do IMC, classificação e peso ideal
    const calcularIMC = () => {
        //Inicializando as variáveis antes do laço de condição sem atribuir valores
        let imcCalculado = null;
        let quadradoAltura = null;

        const erroPeso = peso;
        const erroAltura = altura;


        //Cálculo do IMC
        if (peso && altura) {
            const altutaMetros = parseFloat(altura) / 100;
            quadradoAltura = altutaMetros * altutaMetros;
            imcCalculado = (parseFloat(peso) / (quadradoAltura)).toFixed(2);
            setImc(imcCalculado);
        };

        if ((isNaN(erroPeso) || erroPeso == 0) || (isNaN(erroAltura) || erroAltura == 0)) {
            alert('Valores inválidos, por favor tente novamente...');
            setImc();
            setClassification();
        }

        //Classificação de IMC
        if (imcCalculado < 18.5) {
            setClassification("Abaixo do Peso 👎");
        } else if (imcCalculado < 25) {
            setClassification("Peso Normal 👍");
        } else if (imcCalculado < 30) {
            setClassification("Sobrepeso ❗️");
        } else if (imcCalculado < 35) {
            setClassification("Obesidade Grau 1 ⚠️");
        } else if (imcCalculado < 40) {
            setClassification("Obesidade Grau 2 😧");
        } else {
            setClassification("Obesidade Grau 3 (Obesidade Mórbida) ☠️");
        }

        //Cálculo do peso ideal, mínimo e máximo utilizando como base a altura do usuário
        setPesoMin(18.5 * quadradoAltura);
        setPesoMax(24.9 * quadradoAltura);
    };

    //Renderização do componente FormIMC, com os campos para o usuário inserir o peso e altura
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
            <View style={styles.button}><Button title="Calcular IMC" color="#87CEEB" borderRadius={16} onPress={calcularIMC} /></View>
            {imc && classification && <Result imc={imc} classification={classification} pesoMin={pesoMin} pesoMax={pesoMax} />}
        </View>
    );

};

//Constante que guarda os estilos do componente
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#E0FFFF',
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

    button: {
        overflow: 'hidden',
        borderRadius: 15,
        marginTop: 20,
    }

});

export default FormIMC;
