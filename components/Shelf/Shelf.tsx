import { neon } from '@neondatabase/serverless';
import { Book } from '@/types';
import { BookBox } from "../BookBox";
import styles from "./styles.module.css";

export interface ShelfProps {
	category: Category,
	term: string
}

type Category = "isbn" | "title" | "author" | "year" | "publisher";

export const Shelf = async ({ category, term }: ShelfProps) => {
	if (!process.env.DATABASE_URL) {
		throw new Error('DATABASE_URL is not set');
	}

	const sql = neon(process.env.DATABASE_URL);

	const books = (await sql.query(`select * from catalog.books where ${category} = $1`, [term])) as Book[];

	return (
		<div className={styles.shelf}>
			{books.map((book: Book) =>
				<BookBox book={book} key={book.isbn} />
			)}
		</div>
	);
};
