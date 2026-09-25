import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Searchbar } from 'react-native-paper';
import CategoriaCard from '../../components/CategoriaCard';
import SongCard from '../../components/SongCard';

const DESTACADOS = [
  { id: 1, titulo: '#TechnoBeats', artista: '', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhsVlA9-0ghsbtk4dcJhET_YB_5NQWfxP3WTOTyQjmCw&s=10' },
  { id: 2, titulo: '#BluesBeats', artista: '', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMx3gbZZ50S9jHuCFuHq_VYA_NAn3fJiJBgM-PAEyfGg&s=10' },
  { id: 3, titulo: '#FolkTales', artista: '', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT19P4SfLRfHGv_vwtPCJKQm5_d0R0y1PVAKu0XcPVcSw&s' },
];

const CATEGORIAS = [
  { id: 1, nombre: 'Hip Hop', color: '#4A7FE0', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb1J2hO94i2YOfeFPf-iuLN_rv7ekjIyNcrEeCRb9sAQ&s=10' },
  { id: 2, nombre: 'Electronic', color: '#7B4AE0', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBs1BfYAwvhi-2gaOnX6aKl1n-vZwTFBo9NAnsvyEz95H2RXcnHV1MJYs&s=10' },
  { id: 3, nombre: 'Pop', color: '#2FA88E', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4FJI9WK6u--LHyZmEgtgW3n9KOtUxvi8Zw5m8j0ccA&s=10' },
  { id: 4, nombre: 'Party', color: '#E0468B', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnK096cS67AJ7QsZJxdO-cyPdvpAXCSc8LMyPEUVySAA&s=10' },
  { id: 5, nombre: 'Blues', color: '#5B4AE0', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGBrl--pgJEJdJBDphf13aJWBNagUQrCpj-J106dBqA&s=10' },
  { id: 6, nombre: 'Techno', color: '#3AA0C6', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fbK_7ckBAPM_EoFw86s0NIsNjIDAhj6k83Jj2vkyRw&s=10' },
];

export default function ExplorarScreen() {
  const [busqueda, setBusqueda] = React.useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Searchbar
        placeholder="Search for a song"
        value={busqueda}
        onChangeText={setBusqueda}
        style={styles.buscador}
        inputStyle={{ color: '#fff' }}
        iconColor="#888"
        placeholderTextColor="#888"
      />

      <Text style={styles.subtitulo}>Explore Your SoundCloud</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {DESTACADOS.map((d) => (
          <SongCard
            key={d.id}
            titulo={d.titulo}
            artista={d.artista}
            imagen={d.imagen}
            onPress={() => {}}
          />
        ))}
      </ScrollView>
      <Text style={[styles.subtitulo, { marginTop: 20 }]}>Mood & Genres</Text>
      <View style={styles.grid}>
        {CATEGORIAS.map((cat) => (
          <CategoriaCard
            key={cat.id}
            nombre={cat.nombre}
            imagen={cat.imagen}
            color={cat.color}
            onPress={() => {}}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  buscador: { backgroundColor: '#1E1E1E', borderRadius: 12, marginBottom: 24 },
  subtitulo: { color: '#fff', fontSize: 17, fontWeight: '600', marginBottom: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
});
