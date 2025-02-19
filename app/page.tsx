import Link from 'next/link';
import LoginForm from "@/components/homepage/LoginForm/LoginForm";

const Home = () => (
  <>
    <header>
      <p>Logged in state</p>
    </header>

    <main>
      <h1>Bookstore</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt aperiam cum voluptatibus doloremque accusamus ab! Consequatur atque vel nihil ipsa, officia non qui praesentium ipsam alias totam voluptatum perferendis odio.</p>
      <LoginForm />
      <Link href="/about">About</Link>
    </main>
  </>
);

export default Home;
