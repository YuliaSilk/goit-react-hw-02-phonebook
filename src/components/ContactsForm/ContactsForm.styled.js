import styled from "styled-components";

export const FormStyle = styled.div`
display: flex;
Flex-direction: column;
gap: 8px;
pudding: 20px 10px;
margin: 0 auto;
`;

export const FormTittle = styled.h2`
font-size: 24px;
font-wight: 200;
color: #1D3726;
`;

export const FormInput = styled.label`
border:3px solid #334b3b;
border-radius: 4px;
box-shadow: 1px 1px 3px 2px #334b3b;
font-size: 12px;
color: #1D3726;
`;

export const AddBtn = styled.button`
font-size: 12px;
color: #1D3726;
cursor: pointer;
backgraund: #A8BCAF;
border:1px solid #334b3b;
border-radius: 4px;
box-shadow: 1px 1px 3px 2px #334b3b;
transition: 250ms;

&hover{
    backgraund: #1D3726;
    color: #A8BCAF;
    border-radius: 14px;
}
`;


