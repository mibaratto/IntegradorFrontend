import styled from "styled-components";
import { theme } from "../../styles";

export const HeaderStyle = styled.header`

    width: 100vw;
    height: 50px;
    display: flex;
    background-color: ${theme.colors.gray[500]};
    justify-content: center;
    align-items: center;
    //border: 1px solid red;


`
export const IconLogo = styled.div`
    justify-content: center;
    align-items: center;
    //border: 1px solid red;
`

export const ButtonHeader = styled.div`
    //border: 1px solid red;
    position:absolute;
    top:8 ;
    right:0;
    margin-right: 8px;
    
`

// OBS: mudar o tipo do cursor ajuda o usuário a perceber que aquele item é clicável.