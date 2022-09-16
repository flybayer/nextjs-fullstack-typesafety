import styles from "../styles/Home.module.css";

export default function PreviewEnvironments({ deployments }: PageProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://flightcontrol.dev">
            Flightcontrol Preview Environments!
          </a>
        </h1>

        <div className={styles.description}>TODO</div>
      </main>
    </div>
  );
}
