import {styled, css} from "styled-components";

export const InputAtom:any = styled.input`
    flex: 1 0 auto;
    line-height: 1.25rem;
    width: 100%;
    height: 3.5rem;
    font-size: 1rem;
    /* border: 0; */
    padding: 1.625rem 0.625rem 1rem 1rem;        
    border-radius: 12px;

    background-color: ${(props:any) => props.outlined ? '#fff' : '#e3eaf3' };
    border: ${(props:any) => props.outlined ? '2px solid #1242f4' : 'none' };
    &:focus-within{
        outline: transparent solid .2rem;
    }

`