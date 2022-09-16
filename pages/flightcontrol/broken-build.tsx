import Form from "../../components/Form";
import LabeledTextField from "../../components/LabeledTextField";
import styles from "../../styles/Home.module.css";
import { SaveDurationInput } from "../../validations";
import type { SaveDurationResult } from "../api/broken-build-pulse";

export default function BrokenBuild() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Broken Build Notification!</h1>

        <div className={styles.description}>
          <Form
            schema={SaveDurationInput}
            onSubmit={async ({ duration }) => {
              try {
                const input = { duration };
                const result = (await fetch("/api/broken-build-pulse", {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify(input),
                }).then((res) => res.json())) as SaveDurationResult;
                console.log(result!.success);
              } catch (err) {
                alert(err);
              }
            }}
          >
            <LabeledTextField
              name="duration"
              label="Electrical Pulse Duration"
            />
          </Form>
        </div>
      </main>
    </div>
  );
}
