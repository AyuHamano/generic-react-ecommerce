import {createContext, useContext} from "react";

export const GlobalSearch = createContext('')

export const useGlobalContext = () => useContext(GlobalSearch)
