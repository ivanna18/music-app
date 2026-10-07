import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Chip, IconButton, Text } from 'react-native-paper';
import SongCard from '../../components/SongCard';
import { CANCIONES } from '../../data/songs';

const CATEGORIAS = ['All', 'Party', 'Blues', 'Sad', 'Hip Hop'];

export default function HomeScreen() {
  const [categoriaActiva, setCategoriaActiva] = useState('All');

  const irAReproductor = (cancion) => {
    router.push({
      pathname: '/reproductor',
      params: { titulo: cancion.titulo, artista: cancion.artista, imagen: cancion.imagen },
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <View style={styles.header}>
        <View>
          <Text style={styles.saludoLabel}>Hello,</Text>
          <Text style={styles.saludoNombre}>Ivanna Rodriguez ✨</Text>
        </View>
        <View style={styles.headerIconos}>
          <IconButton icon="bell-outline" iconColor="#fff" onPress={() => {}} />
          <Avatar.Text size={36} label="IR" />
        </View>
      </View>

      <Text style={styles.subtitulo}>Select Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipsRow}>
        {CATEGORIAS.map((cat) => (
          <Chip
            key={cat}
            selected={categoriaActiva === cat}
            onPress={() => setCategoriaActiva(cat)}
            style={[styles.chip, categoriaActiva === cat && styles.chipActivo]}
            textStyle={categoriaActiva === cat ? styles.chipTextoActivo : styles.chipTexto}
          >
            {cat}
          </Chip>
        ))}
      </ScrollView>

      <View style={styles.filaTitulo}>
        <Text style={styles.subtitulo}>Popular Songs</Text>
        <Text style={styles.verTodo}>See all</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CANCIONES.map((c) => (
          <SongCard
            key={c.id}
            titulo={c.titulo}
            artista={c.artista}
            imagen={c.imagen}
            onPress={() => irAReproductor(c)}
          />
        ))}
      </ScrollView>
     
      <Text style={[styles.subtitulo, { marginTop: 24 }]}>New Collection</Text>
      <View style={styles.banner}>
        <View>
          <Text style={styles.bannerTitulo}>TOP SONGS{'\n'}GLOBAL</Text>
          <Text style={styles.bannerSub}>Discover 85 songs</Text>
        </View>
        <IconButton icon="arrow-right" iconColor="#fff" style={styles.bannerFlecha} onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  headerIconos: { flexDirection: 'row', alignItems: 'center' },
  saludoLabel: { color: '#aaa', fontSize: 14 },
  saludoNombre: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  subtitulo: { color: '#fff', fontSize: 17, fontWeight: '600', marginBottom: 10 },
  filaTitulo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  verTodo: { color: '#888', fontSize: 13 },
  chipsRow: { marginBottom: 4 },
  chip: { marginRight: 8, backgroundColor: '#1E1E1E' },
  chipActivo: { backgroundColor: '#C6FF3A' },
  chipTexto: { color: '#ccc' },
  chipTextoActivo: { color: '#000', fontWeight: '600' },
  banner: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 12,
  },
  bannerTitulo: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  bannerSub: { color: '#aaa', fontSize: 13, marginTop: 6 },
  bannerFlecha: { backgroundColor: '#2A2A2A' },
});
