import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import { useId } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please, add your valid email!")
      .required("Please, add your email"),
    password: Yup.string()
      .min(7, "Too Short!")
      .max(18, "Too Long!")
      .required("Please, add your password"),
  });

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
      initialValues={initialValues}
    >
      <div className={s.container}>
        <Form className={s.form}>
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
            <label className={s.login}>
              <Link to="/register">Do not have account? Lets create it!</Link>
            </label>
          </div>
          <div>
            <button type="submit" className={s.btn}>
              Login
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};
export default LoginForm;
