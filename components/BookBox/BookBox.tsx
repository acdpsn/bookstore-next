import Image from "next/image";
import type { Book } from "@/types";
import styles from "./styles.module.css";

export interface BookProps {
	book: Book;
}

export const BookBox = ({ book }: BookProps) => {
	const imgUrl = book.image_url_l?.replace("http:", "https:")

	return (
		<Image
			src={imgUrl}
			alt={`${book.title} cover`}
			width={0}
			height={0}
			style={{ width: "auto", height: "260px" }}
			unoptimized
			className={styles.image}
		/>
	)
}
