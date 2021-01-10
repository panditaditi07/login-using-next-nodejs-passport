import Head from "next/head";
import styles from "../styles/Login.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles["main-container"]}></div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnMjBMy6US0PHhfC7-yv8E9q0fvWVBfooaw&usqp=CAU"
          width="120"
          height="80"
          className={styles["heading"]}
        />
        <h3 className={styles["heading"]}>Please login</h3>
      </div>
      <div className={styles["login"]}>
        <form action="" name="login">
          <label htmlFor="email">Email</label>
          <br></br>
          <input
            className={styles["email-input"]}
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <br></br>
          <label htmlFor="password">
            Password{" "}
            <Link href="/">
              <a className={styles["forget-pwd"]}>Forgot Password?</a>
            </Link>
          </label>
          <br></br>
          <input
            className={styles["password-input"]}
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Enter your password"
          />
          <br></br>
          <button
            onClick={() => {
              windows.location.href = "/welcome";
            }}
            className={styles["signin-button"]}
            type="submit"
          >
            Login
          </button>
          Not have a account?
          <Link href="/signup">
            <a className={styles["signup"]}>Sign in</a>
          </Link>
        </form>
      </div>
    </>
  );
}
