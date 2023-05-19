import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Providers from "./Providers";
import "./globals.css";

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
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
