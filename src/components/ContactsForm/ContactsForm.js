import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import { FormStyle, FormTittle, FormInput, AddBtn } from './ContactsForm.styled';

const FormSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .matches("^[a-zA-Zа-яА-Я]+(([' /-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$", 'Invalid name format')
      .min(2, 'Too short contacts name!')
      .max(15, 'Too long contacts name!')
      .required('Required'),
    number: Yup.string()
    .trim()
    .matches("/+?/d{1,4}?[ ./-/s]?/(?/d{1,3}?/)?[ ./-/s]?/d{1,4}[ ./-/s]?/d{1,4}[ ./-/s]?/d{1,9}", 'Invalid phone number format')
    .required('Required'),
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
        <Field id="name" name="Name" placeholder="Enter name of contact" />

        <FormInput htmlFor="number">Phone number</FormInput>
        <Field id="number" name="number" placeholder="Enter phone number" />

        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
      </FormStyle>
      </Formik>
    
  )};

