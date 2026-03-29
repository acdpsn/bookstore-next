import { Shelf } from "@/components";
import LoginForm from "./LoginForm/LoginForm";

const Home = () => (
	<>
		<LoginForm />

		<h2>New</h2>

		<Shelf category="author" term="R. L. Stine" />

		<h2>Trending</h2>

		<Shelf category="author" term="J. R. R. Tolkien" />
	</>
);

export default Home;
