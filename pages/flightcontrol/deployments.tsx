import styles from "../../styles/Home.module.css";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Deployment, PrismaClient } from "@prisma/client";
import Link from "next/link";
import { Routes } from "@blitzjs/next";

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps<{
  deployments: Deployment[];
}> = async (ctx) => {
  const deployments = await prisma.deployment.findMany();
  return { props: { deployments } };
};

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Deployments({ deployments }: PageProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://flightcontrol.dev">Flightcontrol!</a>
        </h1>
        <h2
          className={styles.title}
          style={{ fontSize: "2rem", marginTop: "2rem" }}
        >
          <Link href={Routes.PreviewEnvironments()}>
            <a>Preview Environments</a>
          </Link>
        </h2>

        <div className={styles.description}>
          {deployments.map((deployment) => (
            <p id={deployment.id}>
              Deployment id {deployment.id} - {deployment.commit} -{" "}
              {deployment.date.getDay()}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}
