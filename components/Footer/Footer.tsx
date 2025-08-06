"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CenterContent } from "../CenterContent/CenterContent";
import { ExternalLink } from "../ExternalLink/ExternalLink";
import styles from "./style.module.css";

export const Footer = () => {
	const pathname = usePathname();
	const sourceLink =
		pathname === "/"
			? `https://github.com/acdpsn/bookstore-next/blob/main/app/(home)/page.tsx`
			: `https://github.com/acdpsn/bookstore-next/blob/main/app${pathname}/page.tsx`;

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
