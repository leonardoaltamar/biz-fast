import styled from "styled-components";

export const LabelStyled = styled.label`
    left: 1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.3s all;
    transform-origin: 0;
    font-size: 1rem;
    pointer-events: none;
    /* left: 0; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 87%;
    color: #1242f4;
`