import { Cycle } from "./style"

export const SchoolCycle = ({date, color}) =>{
    return(
        <Cycle color={color} >
            <p>{date}</p>
        </Cycle>
    )
}