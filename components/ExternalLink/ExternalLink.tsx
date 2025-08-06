import { ExternalLink as ExtLinkIcon } from "lucide-react";
import Link from "next/link";
import styles from "./style.module.css";

type ExternalLinkProps = {
	children: React.ReactNode;
	href: string;
};

export const ExternalLink = ({ children, href }: ExternalLinkProps) => (
	<Link href={href} className={styles.container}>
		{children} <ExtLinkIcon className={styles.icon} strokeWidth={2.5} />
	</Link>
);
