import styled from 'styled-components';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .logo {
        width: 100px;
        height: 4rem;
        fill: ${(props) => props.theme.colors.text};
        cursor: pointer;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    };
`

export const LightModeIcon = styled(MdOutlineLightMode)`
    color: ${(props) => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;
`;


export const DarkModeIcon = styled(MdOutlineDarkMode)`
    color: ${(props) => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;
`; 