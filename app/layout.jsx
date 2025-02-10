import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

const font = localFont({
  src: [
    {
      path: "../public/font/bahij_roya_irfont.ttf",
      weight: "200",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "آنلاین شاپ",
  description: "online shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={font.className}>
        <Navbar/>
        { children }
        <Footer/>
      </body>
    </html>
  );
}
