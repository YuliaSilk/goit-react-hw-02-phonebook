import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";

export const FormStyle = styled.div`
display: flex;
width: 360px;
flex-direction: column;
margin-bottom: 4px;
gap: 10px;

`;

export const FormTittle = styled.h2`
font-size: 42px;
width: 400px;
font-wight: 200;
color: #3C0023;
margin: 0;
margin-bottom: 12px;
`;

export const FormContainer = styled(Form)`
display: flex;
width: 360px;
flex-direction: column;
margin-bottom: 4px;
gap: 10px;
`

export const FormName = styled.label`
width: 300px;
padding: 4px;
font-size: 18px;
font-weight: 600;
color: #ad0467;
`;

export const AddBtn = styled.button`
width: 120px;
padding: 4px;
font-size: 14px;
margin: 0 auto;
color: #ad0467;
cursor: pointer;
background: transparent;
border:1px solid;
border-radius: 15px;
border-color: #ad0467;
transition: 250ms;

&:hover{
    backgraund: theme.colors.main;
    color: theme.colors.backgraund;
    box-shadow: 1px 1px 3px 2px #ad0467;
}
`;


export const ErrMsg = styled(ErrorMessage)`
color: red;
font-size: 16px;
margin-top: 4px;
width: auto;
`;

export const FormField = styled(Field)`
margin-top: 4px;
width: 360px;
padding: 5px;
font-size: 16px;
color:#ad0467;
border-radius: 15px;
border-color: #ad0467;
box-shadow: 1px 1px 3px 2px #ad0467;
}

`


