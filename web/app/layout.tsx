import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyle from "./GlobalStyles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todolist"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <StyledComponentsRegistry>
      <body className={inter.className}>
      <GlobalStyle />
      <Header />
      {children}
        </body>
        </StyledComponentsRegistry>
    </html>
  );
}
