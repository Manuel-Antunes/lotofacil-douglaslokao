import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
    display: flex;
    flex-direction: row;
    height: 100%;
    #logos{
        
        width:50%;
        #logo{
            width: 150px;
            margin-bottom: 20px;
        }
        #loto{
            width: 500px;
        }
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        background-color:#ac2f97; 
    }
    #form{
        width:50%;
        height:100%;
        font-family: sans-serif;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        form{
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content:center;
        }
        #profile{
            width:100px;
        }
        h2{
            margin-bottom: 50px;
        }
        display:flex;
        flex-direction: column;
        align-content: center;
        justify-content:center;
        input{
            border: solid 2px black;
            padding:15px;
            border-radius: 50px;
            width: 300px;
            background-color: #e6e7e9;
            &:focus{
                outline: none;
            }
        }
        input[type=password]{
            margin-bottom: 20px;
        }
        label{
            font-weight: bold;
            font-family: sans-serif;
        }
        button{
            padding:10px;
            border-radius: 50px;
            width: 200px;
            margin: 50px;
            font-family: "Orbitron", sans-serif;
            background-color: #ac2f97;
            font-weight: bold;
            color: #FFF;
            transition: background 0.2s;
            &:focus{
                outline: none;
            }
            &:hover{
                background-color: ${darken(0.1, "#ac2f97")}
            }
        }
    }
`;
