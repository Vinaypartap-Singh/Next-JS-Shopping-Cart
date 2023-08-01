import Products from "@/components/Products";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next JS Shopping Cart</h1>
      <Products />
    </main>
  );
}
