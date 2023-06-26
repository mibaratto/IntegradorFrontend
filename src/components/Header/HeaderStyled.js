import styled from "styled-components";
import { theme } from "../../styles";

export const HeaderStyle = styled.header`

    width: 428px;
    height: 10vh;
    display: flex;
    background-color: ${theme.colors.gray[500]};
    flex-direction:row;
    justify-content: space-between;
    align-items: center

`
export const Title = styled.h1`
    :hover{
        cursor:pointer;
    }
`
export const HeaderIcon = styled.img`
    
`

// OBS: mudar o tipo do cursor ajuda o usuário a perceber que aquele item é clicável.