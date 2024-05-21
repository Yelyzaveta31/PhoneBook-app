import s from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={s.body}>
      <h1 className={s.title}>Your Phonebook</h1>
      <p className={s.text}>Welcome to your contact book!</p>
    </div>
  );
};

export default HomePage;
