'use client';

import Image from "next/image";
import { useState } from "react";
import type { Book } from "@/types";
import styles from "./styles.module.css";

export interface BookProps {
	book: Book;
}

export const BookBox = ({ book }: BookProps) => {
	const [isImageMissing, setIsImageMissing] = useState(false);
	const imgUrl = book.image_url_l?.replace("http:", "https:");

	// let i = book.title.length;
	let a = 0;
	// while (i--) {
	// 	a += book.title.charCodeAt(i)
	// }

	for (let i = 0; i < book.title.length; i++) {
		a += book.title.charCodeAt(i);
	}

	const onLoad = (image: HTMLImageElement) => {
		// amazon provides a 1x1 image for missing covers
		if (image.naturalWidth < 2 || image.naturalHeight < 2) {
			setIsImageMissing(true);
		}
	}

	return isImageMissing ? (
		<div className={styles.placeholder} style={{ filter: `hue-rotate(${a}deg)` }}>
			<p>{book.title}</p>
		</div>
	) : (
		<Image
			src={imgUrl}
			alt={`${book.title} cover`}
			className={styles.image}
			width={0}
			height={0}
			unoptimized
			onLoad={(e) => onLoad(e.target as HTMLImageElement)}
		/>
	)
}
