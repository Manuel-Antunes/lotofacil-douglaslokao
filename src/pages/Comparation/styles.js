import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;
export const Comparator = styled.div`
    padding: 40px 60px;
    background-image:   linear-gradient(#fff,#e0dfe1);
    margin-top: 20px;
    border-radius: 20px;
    border: 1px solid #ac2f97;
    display: flex;
    flex-direction: column;
    h2{
        font-family: 'Orbitron', sans-serif;
        margin-bottom: 30px;
    }
    div{
        button{
            border: solid 2px #ac2f97;
            background: #EEEFFF;
            margin-right: 2px;
            margin-bottom: 5px;
            border-radius: 100%;
            height: 40px;
            transition: background 0.1s,color 0.1s;
            width: 40px;
            &:focus{
                outline: none;
            }
            &:hover{
                cursor: pointer;
            }
        }
    }
    #Comparator{
        margin: 10px;
        font-family: 'Orbitron', sans-serif;
        border-radius: 20px;
        width: fit-content;
        color: #EEEFFF;
        border: #4732a3 solid 1px;
        padding: 5px 20px;
        float: right;
        
        transition: background 0.2s,color 0.2s;
        background-color: #6a47e1;
        &:focus{
                outline: none;
            }
        &:hover{
            background: ${darken(0.2, "#6a47e1")};
            cursor: pointer;
        }
    }
`;
export const GameTable = styled.div`
        font-family: 'Orbitron', sans-serif;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 70%;
        justify-content: space-between;
        padding: 20px;
        align-items: center;
        margin: 20px;
        border: solid 2px #ac2f97;
        background-image: linear-gradient(#fff,#e0dfe1);
        border-radius: 10px;
        table{
            font-family: Arial, sans-serif;
            img{
                width: 30px;
                margin-right: 10px;
            }
            th,tr,td {
                text-align: center; 
                vertical-align: middle;
                height: 40px;
            }
        }
        div{
            font-family: Arial, sans-serif;
            padding: 5px 10px;
            border: 1px solid #ac2f97;
            border-radius: 20px;
        }
`;
