import styled from "styled-components";
import { theme } from "../../styles";

export const HeaderStyle = styled.header`

    width: 100vw;
    height: 10vh;
    display: flex;
    background-color: ${theme.colors.gray[500]};
    flex-direction:row;
    justify-content: space-between;
    align-items: center;

`
export const HeaderIcon = styled.div`
    align-items: center;
`

// OBS: mudar o tipo do cursor ajuda o usuário a perceber que aquele item é clicável.