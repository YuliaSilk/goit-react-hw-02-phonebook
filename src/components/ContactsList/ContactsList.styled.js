import styled from "styled-components";

export const ContactsList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 8px;
padding: 0;
`;

export const ContactItem = styled.li`
width: 400px;

color: theme.colors.main;
gap: 10px;
margin-bottom: 10px;
border-radius: 15px;


:hover {
    background-color: #E1DEF5;
}
`
export const ContactContainer = styled.div`
   
    width: 360px;
    gap: 10px;
    height: auto;
   

`