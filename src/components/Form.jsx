import classes from "./Form.module.css";
function Form() {
  return (
    <form className={classes.form}>
      <label htmlFor="email">Email</label>
      <input
        className={classes.formStyle}
        type="e-mail"
        required
        placeholder="example@gmail.com"
        name="e-mail"></input>

      <label htmlFor="password">Password</label>
      <input
        className={classes.formStyle}
        type="password"
        required
        name="password"></input>

      <div className={classes.checker}>
        <input type="checkbox" />
        <p className={classes.checked}>
          I agree to the your conditions, privacy policy and terms of service
        </p>
      </div>

      <button className={classes.btn}>Sign In</button>
    </form>
  );
}

export default Form;
