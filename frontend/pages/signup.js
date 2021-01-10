import Head from "next/head";
import styles from "../styles/SignUp.module.css";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles["main-container"]}></div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17ObWhBUWrHMaMeq6hmjRiCU6kIlgYaVu-A&usqp=CAU"
          width="120"
          height="90"
          className={styles["heading"]}
        />
        <h3 className={styles["heading"]}>Please Sign Up</h3>
      </div>

      <div className={styles["login"]}>
        <form action="" name="login">
          <label htmlFor="email">Name</label>
          <br></br>
          <input
            className={styles["email-input"]}
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
          />
          <br></br>
          <label htmlFor="email">Email</label>
          <br></br>
          <input
            className={styles["email-input"]}
            type="text"
            id="email"
            name="email"
            placeholder="someone@example.com"
          />
          <br></br>
          <label htmlFor="password">Password </label>
          <br></br>
          <input
            className={styles["password-input"]}
            type="password"
            id="pwd"
            name="pwd"
            placeholder="enter minimum 8 characters"
          />
          <br></br>
          <button className={styles["signin-button"]} type="submit">
            Create Account
          </button>
          <br></br>
          Already have a account?{" "}
          <Link href="/login">
            <a className={styles["signin"]}>Sign in</a>
          </Link>
        </form>
      </div>
    </>
  );
}
