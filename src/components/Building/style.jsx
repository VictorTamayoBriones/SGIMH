import styled from 'styled-components';
import { theme } from '../../theme';

export const BuildingComponent = styled.div`
    display: flex;
    margin: 20px 20px 20px 0;
    width: max-content;
    height: max-content;
    div > div, div > h2{
        background: ${theme.amarillo};
        padding: 5px;
        border-radius: 2px;
    }
    .carreras{
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content:  space-between;
    }
    div > h2{
        height: 100%;
        text-align: center;
        margin-right: 5px;
    }

`;