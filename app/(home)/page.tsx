import { Shelf } from "@/components";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./style.module.css";

const Home = () => (
	<>
		<LoginForm />

		<h1 className={styles.largeHeading}>Bookstore</h1>

		<h2>New</h2>

		<Shelf category="author" term="R. L. Stine" />

		<h2>Trending</h2>

		<Shelf category="author" term="J. R. R. Tolkien" />
	</>
);

export default Home;
