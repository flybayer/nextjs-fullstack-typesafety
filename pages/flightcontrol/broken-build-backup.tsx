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
                await fetch("/api/update-stars", {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({ data: { numberOfStars } }),
                });
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
