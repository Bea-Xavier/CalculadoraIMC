//Importação dos componentes necessários
import { StyleSheet, View, Text } from "react-native";
import Title from "./src/components/Title";
import FormIMC from "./src/components/FormIMC";

//Renderização do componente App, que é o principal do aplicativo
export default function App() {
  return (
    <View style={styles.container}>
     <Title />
     <FormIMC />
    </View>
  );
}

//Constante que guarda os estilos do componente App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 14,
    backgroundColor: '#87CEEB',
  },
});
