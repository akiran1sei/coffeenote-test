import styles from "@/app/styles/layout.module.css";
import { GlobalHeader } from "@/app/components/header/GlobalHeader";
export default function PagesLayout({ children }) {
  return (
    <div className={styles.main_contents}>
      <GlobalHeader />
      {children}
    </div>
  );
}
