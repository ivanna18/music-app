import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function CrearScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Crear Playlist</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center' },
  texto: { color: '#fff', fontSize: 18 },
});