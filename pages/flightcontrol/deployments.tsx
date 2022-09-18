import styles from "../../styles/Home.module.css";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
interface Deployment {
  id: string;
  date: string;
  commit: string;
}
export const getServerSideProps: GetServerSideProps<{
  deployments: Deployment[];
}> = async (ctx) => {
  const deployments: Deployment[] = require("../../deployments.json");
  return { props: { deployments } };
};

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Deployments({ deployments }: PageProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Deploy with <a href="https://flightcontrol.dev">Flightcontrol!</a>
        </h1>

        <div className={styles.description}>
          {deployments.map((deployment) => (
            <p id={deployment.id} key={deployment.id}>
              Deployment id {deployment.id} - {deployment.commit}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}
