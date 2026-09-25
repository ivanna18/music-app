import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function BibliotecaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tu Biblioteca</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center' },
  texto: { color: '#fff', fontSize: 18 },
});