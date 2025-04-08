import { Text, StyleSheet } from 'react-native';

//Função que retorna o título do aplicativo
const Title = () => {
    return (
        <Text style={styles.title}>🌊 Calculadora de IMC ❄️</Text>
    )
}

//Constante que guarda os estilos do componente
const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color: '#4682B4'
    },
});

export default Title;