import {create} from "zustand";


interface SearchStore{
    search:string,
    setSearch:(search :string )=>void
}

export const useSearchStore = create<SearchStore>((set) => ({
    search: "Task",
    setSearch: (search: string) => set({ search }),
}));