import { createContext, useContext, useMemo, useState } from 'react';

const PlaylistContext = createContext(null);

export function PlaylistProvider({ children }) {
  const [playlists, setPlaylists] = useState([]);

  const createPlaylist = (name, songIds) => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      return { success: false, message: 'El nombre de la playlist es obligatorio.' };
    }

    if (!songIds || songIds.length === 0) {
      return { success: false, message: 'Selecciona al menos una canción.' };
    }

    const uniqueSongIds = [...new Set(songIds)];
    const nuevaPlaylist = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: trimmedName,
      songIds: uniqueSongIds,
    };

    setPlaylists((actual) => [nuevaPlaylist, ...actual]);

    return { success: true, playlist: nuevaPlaylist };
  };

  const value = useMemo(
    () => ({
      playlists,
      createPlaylist,
    }),
    [playlists]
  );

  return <PlaylistContext.Provider value={value}>{children}</PlaylistContext.Provider>;
}

export function usePlaylists() {
  const context = useContext(PlaylistContext);

  if (!context) {
    throw new Error('usePlaylists debe usarse dentro de PlaylistProvider');
  }

  return context;
}
