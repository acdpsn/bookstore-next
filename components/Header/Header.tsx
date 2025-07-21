import { Search } from "lucide-react";
import Link from "next/link";
import CenterContent from "../CenterContent/CenterContent";
import styles from "./style.module.css";

const Header = () => (
	<header className={styles.header}>
		<CenterContent>
			<div className={styles.row}>
				<ul className={styles.list}>
					<li className={styles.listItem}>
						<p>
							<Link href="/">Home</Link>
						</p>
					</li>

					<li className={styles.listItem}>
						<p>
							<Link href="/collection">Collection</Link>
						</p>
					</li>

					<li className={styles.listItem}>
						<p>
							<Link href="/account">Account</Link>
						</p>
					</li>
				</ul>

				<div className={styles.rightAlign}>
					<input
						type="text"
						name="searchBox"
						placeholder="Enter a search term..."
					/>

					<button type="submit" className={styles.searchButton}>
						<Search className={styles.searchIcon} strokeWidth={2.5} />
						Search
					</button>
				</div>
			</div>
		</CenterContent>
	</header>
);

export default Header;
