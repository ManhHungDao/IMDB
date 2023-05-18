import Header from "@/components/Header";
// import { ThemeProvider } from "next-themes";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "IMDB",
  description: "This is a IMDB website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
