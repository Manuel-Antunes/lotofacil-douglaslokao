import styled from 'styled-components';

export const Container = styled.div`
    margin:20px;
    float: right;
    font-size:30px;
    display: fixed;

    button{
        padding: 6px;
        width: 60px;
        border-radius: 10px;
        border: solid 2px #ac2f97;
        margin-left: 5px;
        &:focus{
            outline: none;
        }
        &:hover{
            cursor: pointer;
        }
    }

`;
