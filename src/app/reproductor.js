import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, IconButton, ProgressBar } from 'react-native-paper';
import { useLocalSearchParams, router } from 'expo-router';

export default function ReproductorScreen() {
  const { titulo, artista, imagen } = useLocalSearchParams();
  const [reproduciendo, setReproduciendo] = useState(true);
  const [progreso, setProgreso] = useState(0.32); // 32% avanzado, ejemplo

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="chevron-down" iconColor="#fff" size={28} onPress={() => router.back()} />
        <View style={styles.headerTextos}>
          <Text style={styles.headerLabel}>PLAYING FROM ALBUM</Text>
          <Text style={styles.headerAlbum}>{titulo}</Text>
        </View>
        <IconButton icon="dots-vertical" iconColor="#fff" size={24} onPress={() => {}} />
      </View>

      <Image source={{ uri: imagen }} style={styles.portada} />

      <View style={styles.infoRow}>
        <View>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.artista}>{artista}</Text>
        </View>
        <IconButton icon="heart-outline" iconColor="#fff" size={26} onPress={() => {}} />
      </View>

      <ProgressBar progress={progreso} color="#C6FF3A" style={styles.barra} />
      <View style={styles.tiemposRow}>
        <Text style={styles.tiempo}>1:37</Text>
        <Text style={styles.tiempo}>4:21</Text>
      </View>

      <View style={styles.controles}>
        <IconButton icon="shuffle" iconColor="#888" size={24} onPress={() => {}} />
        <IconButton icon="skip-previous" iconColor="#fff" size={32} onPress={() => {}} />
        <IconButton
          icon={reproduciendo ? 'pause-circle' : 'play-circle'}
          iconColor="#C6FF3A"
          size={64}
          onPress={() => setReproduciendo(!reproduciendo)}
        />
        <IconButton icon="skip-next" iconColor="#fff" size={32} onPress={() => {}} />
        <IconButton icon="repeat" iconColor="#888" size={24} onPress={() => {}} />
      </View>

      <Text style={styles.lyrics}>LYRICS ⌄</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, paddingTop: 50 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerTextos: { alignItems: 'center' },
  headerLabel: { color: '#888', fontSize: 11, letterSpacing: 1 },
  headerAlbum: { color: '#fff', fontSize: 14, fontWeight: '600' },
  portada: { width: '100%', height: 340, borderRadius: 16, marginTop: 20 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  titulo: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  artista: { color: '#888', fontSize: 14, marginTop: 4 },
  barra: { height: 4, borderRadius: 2, marginTop: 24 },
  tiemposRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 },
  tiempo: { color: '#888', fontSize: 12 },
  controles: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 },
  lyrics: { color: '#888', textAlign: 'center', marginTop: 30, fontSize: 12 },
});