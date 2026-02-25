import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
    title: "SMART Consulting Engineers PLC",
    description: "Premium Civil Engineering Consultancy in Ethiopia",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased bg-background-dark text-white selection:bg-primary selection:text-white">
                <AOSInit />
                <Navigation />
                <main>{children}</main>
                <Footer />
                <Chatbot />
            </body>
        </html>
    );
}
