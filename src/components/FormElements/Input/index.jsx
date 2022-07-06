import './style.css'

export const Input = ({type, placeholder, onChange, value, name}) => {
    return(
        <input type={ type } placeholder={ placeholder } onChange={ onChange } value={ value } name={ name } />
    )
}