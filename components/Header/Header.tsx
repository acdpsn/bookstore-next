import Link from "next/link";
import styles from "./style.module.css";
import CenterContent from "../CenterContent/CenterContent";

const Header = () => (
  <CenterContent bgcolor="#34352f">
    <div className={styles.row}>
      <div className={styles.item}>
        <p>Logged in state:&nbsp;
          <span className={styles.loggedInStatus}>false</span>
        </p>
      </div>

      <div className={styles.item}>
        <Link href="/">Home</Link>
      </div>

      <div className={styles.item}>
        <Link href="/about">About</Link>
      </div>
    </div>
  </CenterContent>
);

export default Header;
