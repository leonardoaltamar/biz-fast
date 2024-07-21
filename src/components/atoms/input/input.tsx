import {styled} from "styled-components";

interface InputProps {
    outlined?: boolean
}

export const InputAtom = styled.input<InputProps>`
    flex: 1 0 auto;
    line-height: 1.25rem;
    width: 100%;
    height: 3.5rem;
    font-size: 1rem;
    /* border: 0; */
    padding: 1.625rem 0.625rem 1rem 1rem;        
    border-radius: 12px;

    background-color: ${(props:any) => props?.outlined ? `${props.theme.colors.white}` :  `${props.theme.colors.backGroundInput}` };
    border: ${(props:any) => props.outlined ? `2px solid ${props.theme.colors.borderInput}` : 'none' };
    &:focus-within{
        outline: transparent solid .2rem;
    }

`