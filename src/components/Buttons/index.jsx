import { AddCycleButton, ButtonComponent } from './style';
import plus from '../../icons/plus.png';
import { useNavigate } from 'react-router-dom';

export const Button = ({children, onClick}) => {
    return(
        <ButtonComponent onClick={ onClick } >
            {children}
        </ButtonComponent>
    )
}

export const AddCycle = () =>{
    const navigate = useNavigate();

    return(
        <AddCycleButton onClick={ ()=>navigate('/newCycle')} >
            <p>Start a new school cycle</p>
            <img src={ plus } alt="plus icon" />
        </AddCycleButton>
    )
}