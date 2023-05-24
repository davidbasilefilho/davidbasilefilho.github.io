import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "David Basile Filho",
    description: "Meu site pessoal",
};

export default function RootLayout({ children }) {
    useEffect(() => {
        const use = async () => {
            (await import("tw-elements")).default;
        };
        use();
    }, []);

    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
