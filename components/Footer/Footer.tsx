import Link from "next/link";
import styles from "./style.module.css";
import CenterContent from "../CenterContent/CenterContent";

const Footer = () => (
	<footer className={styles.footer}>
		<CenterContent>
			<ul className={styles.list}>
				<li>
					<Link href="/about">About</Link>
				</li>
			</ul>
		</CenterContent>
	</footer>
);

export default Footer;
