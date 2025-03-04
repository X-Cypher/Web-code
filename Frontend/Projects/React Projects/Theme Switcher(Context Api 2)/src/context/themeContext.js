import { createContext, useContext } from "react";

//default values de di Context ki
export const ThemeContext = createContext({
    theme: 'light',
    changeTheme: () => {}
})

//provider bhi direct bna dia
export const ThemeProvider = ThemeContext.Provider

//use context mai theme ki value dalke direct ek function de dia
export default function useThemeContext(){
    return useContext(ThemeContext)
}

// previous way: const {theme} = useContext(ThemeContext)
// current: const {theme} = useThemeContext()