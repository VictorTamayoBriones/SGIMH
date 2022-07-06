import React, { useState } from 'react';
import { theme } from '../theme';

export const ContextCycles = React.createContext();

export const ProviderCycles = ({children}) =>{

    const[cycles, setCycles]=useState([{date: 'Mayo - Agosto 2022', color: theme.azul}])

    return(
        <ContextCycles.Provider value={{cycles, setCycles}} >
            {children}
        </ContextCycles.Provider>
    )

}