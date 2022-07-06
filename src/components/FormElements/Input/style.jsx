import styled from 'styled-components';
import { theme } from '../../../theme';

export const InputComponent = styled.input`
    width: 50%;
    padding: 12px 0 3px 3px;
    border: none;
    border-bottom: solid 1px ${ theme.naranja };
    font-size: 18px;
    caret-color: ${ theme.naranja };
    outline: none;
    transition: .3s ease all;
    color: ${ theme.gris };
`;