import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function SongCard({ titulo, artista, imagen, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: imagen }} style={styles.imagen} />
      </Card>
      <Text style={styles.titulo} numberOfLines={1}>{titulo}</Text>
      <Text style={styles.artista} numberOfLines={1}>{artista}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { width: 130, marginRight: 14 },
  card: { backgroundColor: 'transparent', elevation: 0 },
  imagen: { height: 130, borderRadius: 10 },
  titulo: { color: '#fff', fontSize: 13, fontWeight: '600', marginTop: 6 },
  artista: { color: '#888', fontSize: 12 },
});