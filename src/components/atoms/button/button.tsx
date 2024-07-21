import styled from "styled-components";

interface ButtonProps {
    outlined?: boolean
}

export const ButtonAtom = styled.button<ButtonProps>`
    width: 100%;
    background-color: ${ (props:any)=> props.outlined ? 'transparent' : `${props.theme.colors.primary}` };

    padding: 0.75rem 0;
    border-radius: 24px;
    color: ${(props:any)=> props.outlined ? props.theme.colors.primary: props.theme.colors.white};
    border: ${(props:any)=> props.outlined ? `2px solid ${props.theme.colors.primary}`  : 'none'};
    transition: all .2s;
    &:active{
        transform: scale(0.98);
    }
`