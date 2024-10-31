import create from 'zustand';
import { persist } from 'zustand/middleware';

export const AppStore = create(
  persist(
    (set) => ({
      dopen: true,
      updateOpen: (dopen) => set((state) => ({ dopen })),
    }),
    { name: "my_app_store" }
  )
);
