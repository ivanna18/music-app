import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Chip, Text, TextInput } from 'react-native-paper';
import { usePlaylists } from '../../context/PlaylistContext';
import { CANCIONES } from '../../data/songs';

export default function CrearScreen() {
  const { createPlaylist } = usePlaylists();
  const [nombre, setNombre] = useState('');
  const [seleccionadas, setSeleccionadas] = useState([]);
  const [mensaje, setMensaje] = useState('');

  const canSubmit = useMemo(() => nombre.trim().length > 0 && seleccionadas.length > 0, [nombre, seleccionadas]);

  const toggleCancion = (songId) => {
    setSeleccionadas((actual) =>
      actual.includes(songId) ? actual.filter((id) => id !== songId) : [...actual, songId]
    );
  };

  const handleCrear = () => {
    const resultado = createPlaylist(nombre, seleccionadas);

    if (!resultado.success) {
      setMensaje(resultado.message);
      return;
    }

    setMensaje(`Playlist "${resultado.playlist.name}" creada correctamente.`);
    setNombre('');
    setSeleccionadas([]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>Crear Playlist</Text>
      <TextInput
        label="Nombre de la playlist"
        value={nombre}
        onChangeText={(text) => {
          setNombre(text);
          if (mensaje) setMensaje('');
        }}
        mode="outlined"
        style={styles.input}
        textColor="#fff"
        outlineColor="#333"
        activeOutlineColor="#C6FF3A"
        placeholderTextColor="#888"
      />

      <Text style={styles.subtitulo}>Selecciona canciones</Text>
      <View style={styles.chipsWrap}>
        {CANCIONES.map((cancion) => {
          const selected = seleccionadas.includes(cancion.id);

          return (
            <Chip
              key={cancion.id}
              selected={selected}
              onPress={() => toggleCancion(cancion.id)}
              style={[styles.chip, selected && styles.chipActivo]}
              textStyle={selected ? styles.chipTextoActivo : styles.chipTexto}
              showSelectedCheck={false}
            >
              {cancion.titulo}
            </Chip>
          );
        })}
      </View>

      <Button
        mode="contained"
        onPress={handleCrear}
        disabled={!canSubmit}
        style={styles.button}
        buttonColor="#C6FF3A"
        textColor="#121212"
      >
        Crear playlist
      </Button>

      {mensaje ? <Text style={styles.mensaje}>{mensaje}</Text> : null}

      <View style={styles.previewBox}>
        <Text style={styles.previewLabel}>Vista previa</Text>
        <Text style={styles.previewTitle}>{nombre.trim() || 'Sin nombre'}</Text>
        <Text style={styles.previewMeta}>{seleccionadas.length} canciones seleccionadas</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { padding: 20, paddingBottom: 40 },
  titulo: { color: '#fff', fontSize: 28, fontWeight: '700', marginBottom: 20 },
  input: { backgroundColor: '#1E1E1E', marginBottom: 20 },
  subtitulo: { color: '#fff', fontSize: 16, fontWeight: '600', marginBottom: 12 },
  chipsWrap: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 18 },
  chip: { backgroundColor: '#1E1E1E', marginRight: 8, marginBottom: 8 },
  chipActivo: { backgroundColor: '#C6FF3A' },
  chipTexto: { color: '#ccc' },
  chipTextoActivo: { color: '#121212', fontWeight: '700' },
  button: { marginTop: 8, borderRadius: 12 },
  mensaje: { color: '#C6FF3A', marginTop: 14, fontSize: 13 },
  previewBox: {
    marginTop: 18,
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  previewLabel: { color: '#aaa', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 },
  previewTitle: { color: '#fff', fontSize: 20, fontWeight: '700', marginTop: 8 },
  previewMeta: { color: '#ccc', fontSize: 13, marginTop: 8 },
});