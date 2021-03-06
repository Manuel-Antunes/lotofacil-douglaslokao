import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.min.css';

export default createGlobalStyle`
    *{
        ::-webkit-scrollbar {
            width: 5px;
        }
        ::-webkit-scrollbar-thumb {
            -webkit-border-radius: 10px;
            border-radius: 10px;
            background: #ac2f97; 
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
        }   
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html,body, #root{
        height: 100%;
    }
    body{
        -webkit-font-smoothing: antialiased;
    }
`;