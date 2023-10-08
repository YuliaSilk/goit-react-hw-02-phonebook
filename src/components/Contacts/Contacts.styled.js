import styled from "styled-components";

export const ContactItem = styled.li`
  display: flex;
  gap: 16px;
  align-items: center;
  width: fit-content;
  padding: 12px 20px;
 
  font-size: 16px;
  letter-spacing: 1.2;
  border-radius: 4px;
  
`;

export const DeleteBtn = styled.button`
--accent-color: red;
cursor: pointer;
background: transparent;
border-radius: 3px;
border: 1px solid var(--accent-color);
color: var(--accent-color);
display: inline-block;
margin: 0.5rem 1rem;
padding: 0.5rem 0;
transition: all 200ms ease-in-out;
width: 11rem;

:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }
`