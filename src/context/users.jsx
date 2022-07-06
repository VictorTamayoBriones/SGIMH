import React, { useState } from 'react';

export const UsersContext = React.createContext()

export const UsersProvider = ({children})=>{

    const [users, setUser]=useState([
        {
            name: 'manzanilla',
            user: 'manzanilla@gmail.com',
            pass: 'admin123456',
            role: 'admin'
        },
        {
            name: 'David',
            user: 'david@gmail.com',
            pass: 'david123456',
            role: 'director'
        },
        {
            name: 'Anabel',
            user: 'ana@gmail.com',
            pass: 'ana123456',
            role: 'viewer'
        }
    ])

    const[currentUser, setCurrentUser]=useState({});

    return(
        <UsersContext.Provider value={{users, currentUser, setCurrentUser}} >
            {children}
        </UsersContext.Provider>
    )
}