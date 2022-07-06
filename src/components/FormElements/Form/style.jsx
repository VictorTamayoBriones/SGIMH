import styled from 'styled-components';
// import { theme } from '../../../theme';

export const FormComponent = styled.form`
    width: ${ (props) => props.createSome ? '70%' : '90%' };
    /* padding: ${ (props) => props.createSome ? `12px` : '' }; */
    box-shadow: ${ (props) => props.createSome ? `0 0 9px 2px #45454560` : 'none' };
    border-radius: ${ (props) => props.createSome ? '5px' : '' };
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`;