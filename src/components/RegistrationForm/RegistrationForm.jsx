import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Please, add your name"),
    mail: Yup.string()
      .email("Please, add your valid email!")
      .required("Please, add your email"),
    password: Yup.string()
      .min(7, "Too Short!")
      .max(18, "Too Long!")
      .required("Please, add your password"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const handleSubmit = (values, actions) => {
    dispatch(registerThunk(values));

    actions.resetForm();
  };
  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <div className={s.wrapper}>
            <label htmlFor={nameFieldId}>Username</label>
            <Field
              className={s.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
          <div className={s.wrapper}>
            <label htmlFor={emailFieldId}>Email</label>
            <Field
              className={s.input}
              type="email"
              name="email"
              id={emailFieldId}
            />
            <ErrorMessage className={s.error} name="email" component="span" />
          </div>
          <div className={s.wrapper}>
            <label htmlFor={passwordFieldId}>Password</label>
            <Field
              className={s.input}
              type="text"
              name="password"
              id={passwordFieldId}
            />
            <ErrorMessage
              className={s.error}
              name="password"
              component="span"
            />
          </div>
          <div className={s.login}>
            <p>Already have an account? </p>
            <NavLink className={s.link} to="/login">
              Log in
            </NavLink>
          </div>
          <button className={s.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationForm;
