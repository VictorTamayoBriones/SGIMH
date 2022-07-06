import { useContext } from "react"
import { ContextCycles } from "../../context/cycles"
import { SchoolCycle } from "../SchoolCycle";
import { Cycles } from "./style";

export const CyclesList=()=>{

    const { cycles }=useContext(ContextCycles);

    return(
        <Cycles>
            {
                cycles.map((cycle, i)=>(
                    <SchoolCycle  key={ i } date={ cycle.date } color={ cycle.color } />
                ))
            }
        </Cycles>
    )
}