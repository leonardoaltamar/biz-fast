import styled from "styled-components";

export const InputGroupMolecule = styled.div`
    position: relative;
    width: 100%;
    input.fill + label,
    input:focus + label{
        transform: translateY(calc(-100%)) scale(0.80);
    }
`