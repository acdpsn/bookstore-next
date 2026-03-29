import Form from "next/form";
import styles from "./style.module.css";

const LoginForm = () => {
	return (
		<Form action="/login" className={styles.form}>
			<input className={styles.username} type="text" name="username" placeholder="Username" />

			<input className={styles.password} type="text" name="password" placeholder="Password" />

			<button className={styles.login} type="submit">Log In</button>
		</Form>
	);
};

export default LoginForm;
