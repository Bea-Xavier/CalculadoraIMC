import { StyleSheet, View, Text } from "react-native";
import Title from "./src/components/Title";
import FormIMC from "./src/components/FormIMC";
import Classification from "./src/components/Classification";

export default function App() {
  return (
    <View style={styles.container}>
     <Title />
     <FormIMC />
     <Classification />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});
