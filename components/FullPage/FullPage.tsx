import styles from "./style.module.css";

const FullPage = ({
	children,
}: {
	children: React.ReactNode;
}) => <div className={styles.container}>{children}</div>;

export default FullPage;
