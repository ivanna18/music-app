import { router } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List, Text } from 'react-native-paper';
import SongCard from '../../components/SongCard';
import { usePlaylists } from '../../context/PlaylistContext';
import { CANCIONES } from '../../data/songs';

export default function BibliotecaScreen() {
  const { playlists } = usePlaylists();

  const abrirCancion = (cancion) => {
    router.push({
      pathname: '/reproductor',
      params: { titulo: cancion.titulo, artista: cancion.artista, imagen: cancion.imagen },
    });
  };

  if (playlists.length === 0) {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.emptyTitle}>Tu biblioteca está vacía</Text>
        <Text style={styles.emptyText}>Crea tu primera playlist desde la pestaña Crear.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>Biblioteca</Text>
      {playlists.map((playlist) => {
        const canciones = CANCIONES.filter((cancion) => playlist.songIds.includes(cancion.id));

        return (
          <List.Accordion
            key={playlist.id}
            title={playlist.name}
            titleStyle={styles.accordionTitle}
            style={styles.accordion}
            description={`${canciones.length} canciones`}
            descriptionStyle={styles.accordionDescription}
          >
            {canciones.length === 0 ? (
              <Text style={styles.emptySongs}>Sin canciones en esta playlist.</Text>
            ) : (
              <View style={styles.songGrid}>
                {canciones.map((cancion) => (
                  <SongCard
                    key={cancion.id}
                    titulo={cancion.titulo}
                    artista={cancion.artista}
                    imagen={cancion.imagen}
                    onPress={() => abrirCancion(cancion)}
                  />
                ))}
              </View>
            )}
          </List.Accordion>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { padding: 20, paddingBottom: 36 },
  titulo: { color: '#fff', fontSize: 28, fontWeight: '700', marginBottom: 16 },
  accordion: {
    backgroundColor: '#1E1E1E',
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  accordionTitle: { color: '#fff', fontWeight: '700' },
  accordionDescription: { color: '#aaa' },
  emptyTitle: { color: '#fff', fontSize: 22, fontWeight: '700', marginBottom: 8 },
  emptyText: { color: '#aaa', fontSize: 14 },
  containerCenter: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptySongs: { color: '#aaa', paddingHorizontal: 16, paddingBottom: 16 },
  songGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 12, paddingBottom: 14 },
});