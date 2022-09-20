import Form from "../../components/Form";
import LabeledTextField from "../../components/LabeledTextField";
import { SaveStarsInput, SaveStarsResult } from "../api/update-stars";

export default function Page() {
  return (
    <Form
      onSubmit={async ({ numberOfStars }) => {
        try {
          const input: SaveStarsInput = { numberOfStars };
          const result = (await fetch("/api/update-stars", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(input),
          }).then((res) => res.json())) as SaveStarsResult;
        } catch (err) {
          alert(err);
        }
      }}
    >
      <LabeledTextField
        name="numberOfStars"
        label="How many Github stars will pay your rent?"
      />
    </Form>
  );
}
