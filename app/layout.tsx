import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import { CenterContent, Footer, FullPage, Header } from "@/components";
import "./globals.css";

const atkinsonHyperligible = Atkinson_Hyperlegible({
	variable: "--font-atkinson-hyperlegible",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Bookstore App",
	description: "Nextjs playground",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={atkinsonHyperligible.variable}>
				<FullPage>
					<Header />

					<main>
						<CenterContent>{children}</CenterContent>
					</main>
				</FullPage>

				<Footer />
			</body>
		</html>
	);
}
