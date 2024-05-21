import { Audio } from "react-loader-spinner";
import s from "./Refresher.module.css";

export const Refresher = () => {
  return (
    <div className={s.refresher}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="black"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};
