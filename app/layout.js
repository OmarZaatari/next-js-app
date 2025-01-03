import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Chatbot from "@/components/chatbot";
import useServerDarkMode from "@/hooks/use-server-dark-mode";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | OZ",
    default: "Omar Zaatari",
  },
  description: "Generated by OZ",
};

export default function RootLayout({ children }) {
  const theme = useServerDarkMode();

  return (
    <html lang='en' className={theme}>
      <body className={roboto.className}>
        <Header></Header>
        <main className='mt-12'>{children}</main>
        <Chatbot />
      </body>
    </html>
  );
}
