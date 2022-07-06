import styled from 'styled-components';
import { theme } from '../../theme';

export const BuildingView = styled.section`
    width: 90%;
    margin: 20px auto;

    h2{
        padding-bottom: 5px;
        border-bottom: solid 2px ${theme.naranja};
    }

    .carreras{
        margin: 20px 0;
        div{
            margin: 20px 0;
        }
    }
`;
