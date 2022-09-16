import { useParam } from "@blitzjs/next";
import { useRouter } from "next/router";
import { useSearchResults } from "../../stuff";
import styles from "../../styles/Home.module.css";

export default function Search() {
  const router = useRouter();
  const term = useParam("search", "string");
  const searchResults = useSearchResults(term);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Search!</h1>

        <div className={styles.description}>TODO</div>
      </main>
    </div>
  );
}
