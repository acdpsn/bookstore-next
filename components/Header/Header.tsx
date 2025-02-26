import Link from "next/link";
import styles from "./style.module.css";
import CenterContent from "../CenterContent/CenterContent";

const Header = () => (
  <header className={styles.header}>
    <CenterContent>
      <div className={styles.row}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/">Home</Link>
          </li>

          <li className={styles.listItem}>
            <p>Logged in state: <span className={styles.loggedInStatus}>false</span>
            </p>
          </li>
        </ul>
      </div>
    </CenterContent>
  </header>
);

export default Header;
