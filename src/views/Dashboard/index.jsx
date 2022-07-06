import { useContext } from "react"
import { AddCycle } from "../../components/Buttons";
import { CyclesList } from "../../components/CyclesList";
import { UsersContext } from "../../context/users"
import { Login } from "../Login";
import { DashboardComponent } from "./style";

export const Dashboard = () => {

    const { currentUser} = useContext(UsersContext);

    return(
        <DashboardComponent>
            {currentUser[0]?.role == 'admin' ? <AddCycle/> : null}
            <CyclesList/>
        </DashboardComponent>
    )
}