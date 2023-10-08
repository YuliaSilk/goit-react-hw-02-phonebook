import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import { FormStyle, FormTittle, FormInput, AddBtn } from './ContactsForm.styled';

const FormSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Sory! Invalid name format.")
      .min(2, 'Too short name of contact!')
      .matches(15, 'Too long name of contact!')
      .required('Name is required'),
    number: Yup.string()
      .matches(/\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}/, "Sory! Invalid phone number format.")
      .min(8, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Phone number is required'),
  });
  
  export const ContactForm = ({ toAdd }) => {
    return (
     <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(values, actions) => {
            toAdd(values);
            actions.resetForm();
          // same shape as initial values
        //   console.log(values);
        }}
      >
        <FormStyle>
      <FormTittle>Phonebook</FormTittle>
        <Form>
        <FormInput htmlFor="name">Name</FormInput>
        <Field id="name" name="Name" placeholder="Input name of contact" />

        <FormInput htmlFor="number">Phone number</FormInput>
        <Field id="number" name="number" placeholder="Input phone number" />

        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
      </FormStyle>
      </Formik>
    
  )};

