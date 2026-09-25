import React from 'react';
import { Pressable, ImageBackground, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function CategoriaCard({ nombre, imagen, color, onPress }) {
  return (
    <Pressable style={[styles.card, { backgroundColor: color }]} onPress={onPress}>
      <ImageBackground source={{ uri: imagen }} style={styles.imagenFondo} imageStyle={styles.imagenEsquinas} />
      <Text style={styles.nombre}>{nombre}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    height: 90,
    borderRadius: 14,
    padding: 12,
    marginBottom: 14,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  imagenFondo: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: 70,
    height: 90,
    opacity: 0.7,
  },
  imagenEsquinas: { borderRadius: 10 },
  nombre: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});