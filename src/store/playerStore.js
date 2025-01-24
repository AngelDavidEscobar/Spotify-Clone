import {create} from 'zustand';

export const usePlayerStore = create((set) => ({
    IsPlaying: false,
    currentMusic: {playlists: null, song: null, songs: []},
    volume: 1,
    setVolume: (volume) => set({volume}),
    setIsPlaying: (isPlaying) => set({isPlaying}),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
}))
