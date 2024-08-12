import { createContext, useContext } from "react";

type GlobalSearchType = {
    search: string,
    setSearch: (s: string) => void

}

export const GlobalSearch = createContext<GlobalSearchType>({search: '', setSearch: () => {}})

export const useGlobalContext = () => useContext(GlobalSearch)
    