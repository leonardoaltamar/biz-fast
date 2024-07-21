import styled from "styled-components";


export const ButtonAtom:any = styled.button`
    width: 100%;
    background-color: ${ (props:any)=> props.outlined ? 'transparent' : '#1242f4' };

    padding: 0.75rem 0;
    border-radius: 24px;
    color: ${ (props:any)=> props.outlined ? '#1242f4' : '#fff' };
    border: ${ (props:any)=> props.outlined ? '2px solid #1242f4' : 'none' };
    transition: all .2s;
    &:active{
        transform: scale(0.98);
    }
`