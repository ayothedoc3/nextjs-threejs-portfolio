import { create } from 'zustand';

export const useInteractionStore = create((set) => ({
  interactions: 0,
  incrementInteractions: () => set((state) => ({ interactions: state.interactions + 1 })),
}));
