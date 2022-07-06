import styled from 'styled-components';
import { theme } from '../../theme';

export const ButtonComponent = styled.button`
    width: ${(props)=>props.small ? '20%' : '50%'};
    margin: 5px auto;
    background: #F5751A;
    color: #fff;
    border: none;
    padding: 5px 0;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background: #ef6300;
    }
`;

export const AddCycleButton = styled.button`
    width: 50%;
    display: flex;
    align-items: center;
    font-size: 30px;
    background: transparent;
    border: none;
    color: ${theme.gris};
    cursor: pointer;
    
    img{
        width: 10%;
        transition: .3s ease all;
    }

    &:hover{
        img{
            transform: translateX(15px);
        }
    }
`;