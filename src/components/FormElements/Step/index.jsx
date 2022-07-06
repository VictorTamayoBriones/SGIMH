import { StepComponent } from "./style"

export const Step = ({children, status}) =>{
    return(
        <StepComponent status={ status } >
            {children}
        </StepComponent>
    )
}