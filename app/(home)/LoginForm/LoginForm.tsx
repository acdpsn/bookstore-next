import Form from "next/form";
import styles from "./style.module.css";

const LoginForm = () => {
	return (
		<Form action="/login" className={styles.form}>
			<input type="text" name="username" placeholder="Username" />

			<input type="text" name="password" placeholder="Password" />

			<button type="submit">Log In</button>
		</Form>
	);
};

export default LoginForm;
