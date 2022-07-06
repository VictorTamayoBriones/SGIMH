import React, { useState } from 'react';


export const ContextBuildings = React.createContext();

export const ProviderBuildings = ({children}) =>{

    const[buildings, setBuildings]=useState([
        {
            name: 'P',
            carreras: [
                {
                    nameCarrera: 'Tics',
                    materias: ['Desarrollo web', 'Base de datos', 'Gestión de Proyectos'],
                    profesores: ['Diana Lizeth Ahuatzi Reyes', 'Francisco Lopez Briones']
                },
                {
                    nameCarrera: 'Diseño',
                    materias: ['Diseño 1', 'Ingles 5', 'Informatica'],
                    profesores: ['Profesor Prueba 1', 'Profesor Prueba 2']
                }
            ],
            salones: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7']
        },
        {
            name: 'H',
            carreras: [
                {
                    nameCarrera: 'Dnam',
                    materias: ['Administracción', 'Gestión', 'Contaduria'],
                    profesores: ['Profesor Prueba 3', 'Profesor Prueba 4']
                },
                {
                    nameCarrera: 'Capital Humano',
                    materias: ['Economia', 'Ingles 3', 'Gestión de proyectos'],
                    profesores: ['Profesor Prueba 5', 'Profesor Prueba 6']
                }
            ],
            salones: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7']
        }
    ])

    return(
        <ContextBuildings.Provider value={{buildings, setBuildings}} >
            {children}
        </ContextBuildings.Provider>
    ) 
    
}