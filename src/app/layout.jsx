import "./styles/globals.css";
import styles from "@/app/styles/layout.module.css";
import { GlobalHeader } from "@/app/components/header/GlobalHeader";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
          <footer className={styles.footer}>
            <SpeedInsights />
          </footer>
        </div>
      </body>
    </html>
  );
}
