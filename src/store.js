import create from "zustand";

const useStore = create((set) => ({
    loading: true,
    setLoading: () => set((state) => ({ loading: false })),
}));

export default useStore;
