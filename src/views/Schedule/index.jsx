import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ScheduleView } from "./style"
import { useContext } from "react"
import { ContextBuildings } from '../../context/buildings';
import { ReactSortable } from "react-sortablejs";

export const Schedule = () =>{

    const { buildings } = useContext(ContextBuildings);
    const {carrera} = useParams();
    const[days, setDays]=useState(['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'])
    
    const[teachers, setTeachers]=useState([
        {id: 1, name: 'Diana Lizeth Ahuatzi Reyes'},
        {id: 2, name: 'Francisco Lopez Briones'},
        {id: 3, name: 'JULIA GABRIELA NIEVA PAREDES'},
        {id: 4, name: 'ELIZABETH CORTES RAMOS'},
        {id: 5, name: 'JOSÉ MARIN RUGERIO ATRIANO'},
        {id: 6, name: 'BLANCA AURELIA JIMENEZ GOMEZ'},
    ])

    const[salones, setSalones]=useState(['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'])

    return(
        <ScheduleView>
            <div className="days">
                {days.map((day, i)=>(<div key={i} className="day"><p>{day}</p></div>))}
            </div>
            <div className="schedule">
                <div className="teachers">
                    <ReactSortable list={teachers} setList={setTeachers} group='shared' >
                        {teachers.map((teacher)=>(
                            <div key={teacher.id} className="teacher">
                                {teacher.name}
                            </div>
                        ))

                        }
                    </ReactSortable>
                </div>
                <div className="grid-day">
                    <table>
                        <tbody>
                            <tr>
                                <td>Hora</td>
                                <td className="salon" >p1</td>
                                <td className="salon" >p2</td>
                                <td className="salon" >p3</td>
                                <td className="salon" >p4</td>
                                <td className="salon" >p5</td>
                                <td className="salon" >p6</td>
                                <td className="salon" >p7</td>
                            </tr>
                            <tr>
                                <td className="hora" >7:00 - 8:00</td>
                                
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                
                            </tr>
                            <tr>
                                <td className="hora" >8:00 - 9:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </ScheduleView>
    )
}