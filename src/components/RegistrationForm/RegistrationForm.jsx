import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";
import { useId } from "react";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Please, add your name"),
    email: Yup.string()
      .email("Please, add your valid email!")
      .required("Please, add your email"),
    password: Yup.string()
      .min(7, "Too Short!")
      .max(18, "Too Long!")
      .required("Please, add your password"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(registerThunk(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <div className={s.container}>
        <Form className={s.form}>
          <div className={s.wrapper}>
            <label htmlFor={nameFieldId}>Username</label>
            <Field
              className={s.input}
              type="text"
              name="name"
              id="name"
              autoComplete="username"
            />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
          <div className={s.wrapper}>
            <label htmlFor={emailFieldId}>Email</label>
            <Field
              className={s.input}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
            />
            <ErrorMessage className={s.error} name="email" component="span" />
          </div>
          <div className={s.wrapper}>
            <label htmlFor={passwordFieldId}>Password</label>
            <Field
              className={s.input}
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
            />
            <ErrorMessage
              className={s.error}
              name="password"
              component="span"
            />
          </div>
          <div className={s.login}>
            <p>Do you already have an account? </p>
            <NavLink className={s.link} to="/login">
              Log in
            </NavLink>
          </div>
          <button className={s.btn} type="submit">
            Register
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default RegistrationForm;
