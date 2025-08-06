import styles from "./style.module.css";

export const CenterContent = ({
	children,
	bgcolor = "transparent",
}: {
	children: React.ReactNode;
	bgcolor?: string;
}) => (
	<div className={styles.container} style={{ backgroundColor: bgcolor }}>
		<div className={styles.content}>{children}</div>
	</div>
);
