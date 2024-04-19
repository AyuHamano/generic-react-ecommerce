import { createContext } from "react";

type GlobalSearchType = {
    search: string,
    setSearch: (s: string) => void

}

export const GlobalSearch = createContext<GlobalSearchType>