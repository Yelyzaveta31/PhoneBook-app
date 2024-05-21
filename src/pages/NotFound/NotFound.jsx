import { Link } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFound = () => {
  <div className={s.notFoundPage}>
    <h1> Page not found</h1>
    <p>{`Sorry, the page you are looking for does not exist.`}</p>
    <Link to="/">Go Back</Link>
  </div>;
};

export default NotFound;
