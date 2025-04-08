import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//Função que retorna o peso ideal, o peso mínimo e o peso máximo de acordo com o IMC e a altura inserida pelo usuário
const IdealWeight = ({ min, max }) => {
    return (
        <View>
            <Text style={styles.title}>Peso ideal: </Text>
            <Text style={styles.sub}>Mínimo: {min.toFixed(2)}kg</Text>
            <Text style={styles.sub}>Máximo: {max.toFixed(2)}kg</Text>
        </View>
    );
};

//Constante que guarda os estilos do componente
const styles = StyleSheet.create({
    // Título
    title: {
      fontSize: 18,
      marginTop: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: "#87CEFA",
    },
    // Subtítulos 
    sub: {
        fontSize: 14,
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
        color: "#363636",
      },
  });

  export default IdealWeight;