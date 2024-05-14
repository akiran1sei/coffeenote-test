import "./styles/globals.css";
import styles from "@/app/styles/layout.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tasting Note App",
  description: "コーヒーをテイスティングするときに使用するアプリです。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className={styles.container}>
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}></footer>
        </div>
      </body>
    </html>
  );
}
