import styled from "styled-components";
import { theme } from '../../../theme';

export const StepComponent = styled.div`
    width: auto;
    padding: 8px 20px;
    text-align: center;
    color: ${(props)=>props.status == 'focus' ? theme.naranja : theme.gris ? props.status === 'ok' ? theme.verde : theme.gris : theme.gris};
`;