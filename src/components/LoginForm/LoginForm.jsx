import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import * as Yup from "yup";
import s from "./LoginForm.module.css";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please, add your valid email!")
    .required("Please, add your email"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(18, "Too Long!")
    .required("Please, add your password"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    dispatch(loginThunk(values));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div className={s.wrapper}>
          <label className={s.label}>
            <span className={s.labelText}>Email</span>
          </label>
          <Field
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
          <ErrorMessage className={s.error} name="email" component="span" />
        </div>
        <div className={s.wrapper}>
          <label className={s.label}>
            <span className={s.labelText}>Password</span>
          </label>
          <Field
            type="password"
            name="password"
            placeholder="password"
            className={s.input}
            required
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
    </Formik>
  );
};
