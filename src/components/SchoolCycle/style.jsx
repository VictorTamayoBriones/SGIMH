import styled from 'styled-components';

export const Cycle = styled.div`
    width: 50%;
    margin-bottom: 30px;
    padding: 12px;
    font-size: 20px;
    border-radius: 5px;
    -webkit-text-stroke: .3px #fff;
    font-weight: bold;
    background: ${ (props) => props.color ? props.color : '#ccc'};
    transition: .2s ease-in all;
    cursor: pointer;

    &:hover{
        box-shadow: 3px 3px 9px #00000063;
    }
`;