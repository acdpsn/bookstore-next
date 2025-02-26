import Link from "next/link";
import styles from "./style.module.css";
import CenterContent from "../CenterContent/CenterContent";

const Footer = () => (
  <footer className={styles.footer}>
    <CenterContent>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="https://vercel.com/6000/bookstore-next/deployments">Deployments</Link>
        </li>
      </ul>
    </CenterContent>
  </footer>
)

export default Footer;
