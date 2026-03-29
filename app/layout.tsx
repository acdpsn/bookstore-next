import type { Metadata } from "next";
import { Geist, PT_Serif } from "next/font/google";
import { CenterContent, Footer, FullPage, Header } from "@/components";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const ptSerif = PT_Serif({
	variable: "--font-pt-serif",
	subsets: ["latin"],
	weight: "400"
});

export const metadata: Metadata = {
	title: "Bookstore",
	description: "Nextjs app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${ptSerif.variable} antialiased`}>
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
