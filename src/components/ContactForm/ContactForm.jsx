import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values)
    actions.resetForm();
  };

  const initialValues = { name: "", phone: "" };


  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <label>Name</label>
        <Field name="name" type="text" />

        <label>Phone</label>
        <Field name="phone" type="text" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
