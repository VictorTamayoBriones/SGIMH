import { InputComponent } from './style'

export const Input = ({type, placeholder, onChange, value, name}) => {
    return(
        <InputComponent type={ type } placeholder={ placeholder } onChange={ onChange } value={ value } name={ name } />
    )
}