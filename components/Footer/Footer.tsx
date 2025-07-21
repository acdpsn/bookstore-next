"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CenterContent from "../CenterContent/CenterContent";
import ExternalLink from "../ExternalLink/ExternalLink";
import styles from "./style.module.css";

const Footer = () => {
	const pathname = usePathname();
	const sourceLink =
		pathname === "/"
			? `https://github.com/acdpsn/bookstore-next/blob/main/app/(home)/page.tsx`
			: `https://github.com/acdpsn/bookstore-next/blob/main/app${pathname}/page.tsx`;

	const cfSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY;

	return (
		<footer className={styles.footer}>
			<CenterContent>
				<ul className={styles.list}>
					<li>
						<Link href="/about">About</Link>
					</li>

					<li>
						<ExternalLink href={sourceLink}>Page source on GitHub</ExternalLink>
					</li>
				</ul>
			</CenterContent>
		</footer>
	);
};

export default Footer;
