import { StyleSheet, View, Text } from "react-native";
import Title from "./src/components/Title";
import FormIMC from "./src/components/FormIMC";
import { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
     <Title />
     <FormIMC />
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
