import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SuperTokensProvider } from "../components/basic/supertokensProvider";
import { SeparatorLine } from "../assets/images";
import Link from "next/link";
import Image from "next/image";
import { ComponentWrapper } from "./config/frontend";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SuperTokens + Nextjs",
    description: "SuperTokens demo app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    "use client";
    return (
        <html lang="en">
            <body className={`${inter.className} app-wrapper`}>
                <SuperTokensProvider>
                    <ComponentWrapper>
                        <>
                            {children}
                        </>
                    </ComponentWrapper>
                </SuperTokensProvider>
            </body>
        </html>
    );
}
