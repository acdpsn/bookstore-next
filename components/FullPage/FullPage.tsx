import styles from "./style.module.css";

export const FullPage = ({ children }: { children: React.ReactNode }) => (
	<div className={styles.container}>{children}</div>
);
