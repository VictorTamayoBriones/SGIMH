import { FormComponent } from './style'

export const Form = ({children, createSome}) =>{
    return(
        <FormComponent createSome={createSome} >
            {children}
        </FormComponent>
    )
}