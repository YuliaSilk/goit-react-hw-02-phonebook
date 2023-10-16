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
color: ${({ theme }) => theme.colors.header};
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
color: ${({ theme }) => theme.colors.acent};
`;

export const AddBtn = styled.button`
    margin: 0 auto;
    width: 150px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.acent};
    cursor: pointer;
   
    height: 40px;
    text-align:center;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-size: 300% 100%;
    background: transparent;
    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

&:hover{
    border: none;
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

    background: rgb(19,42,19);
    background: linear-gradient(304deg, rgba(19,42,19,0.9473039215686274) 21%, rgba(220,9,66,1) 79%);
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
}
&:focus {
    outline: none;
}

`;

export const ErrMsg = styled(ErrorMessage)`
color: ${({ theme }) => theme.colors.error};
font-size: 16px;
margin-top: 4px;
width: auto;
`;

export const FormField = styled(Field)`
margin-top: 4px;
width: 360px;
padding: 5px;
font-size: 16px;
color:${({ theme }) => theme.colors.inputColor};
outline: none;
border-radius: 15px;
border-color: ${({ theme }) => theme.colors.border};

&:hover{
    border-color: #25aae1;
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);

}

`


