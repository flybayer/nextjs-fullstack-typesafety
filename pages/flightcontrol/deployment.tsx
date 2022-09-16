import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { Routes } from "@blitzjs/next";
import { useQuery } from "@blitzjs/rpc";
// remember, this is a server-side function
import getDeployment from "../../queries/getDeployment";

export default function Deployment() {
  const [deployment, {isLoading}] = useQuery(getDeployment, { id: 1 });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://flightcontrol.dev">Flightcontrol!</a>
        </h1>

        <div className={styles.description}>{deployment} {isLoading</div>
      </main>
    </div>
  );
}
