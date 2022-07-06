import styled from 'styled-components';
import { theme } from '../../theme';

export const ScheduleView = styled.section`
    width: 90%;
    margin: 20px auto;

    .days{
        width: 100%;
        display: flex;
        p{
            background: ${ theme.naranja };
            color: #fff;
            padding: 3px;
            border-radius: 3px;
            margin: 10px 20px 20px 0;
            cursor: pointer;
            transition: .3s ease-in all;

            &:hover{
                box-shadow: 0px 0px 9px #3838388e;
            }
        }
    }

    .teachers{
        width: 20%;
        .teacher{
            background: ${theme.verde};
            color: #fff;
            padding: 5px;
            border-radius: 5px;
            margin: 20px 0;
            cursor: grab;
        }
    }

    .schedule{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .grid-day{
            width: 75%;
        }
    }

    .salon{
        width: 100px;
        text-align: center;
    }

    .hora{
        padding: 30px 0;
    }
`;