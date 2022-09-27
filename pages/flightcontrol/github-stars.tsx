import Form from "../../components/Form";
import LabeledTextField from "../../components/LabeledTextField";
import { SaveStarsInputType } from "../../validations";

export default function Page() {
  return (
    <Form
      schema={SaveStarsInput}
      onSubmit={async ({ numberOfStars }) => {
        try {
          const input: SaveStarsInputType = { numberOfStars };
          const result = (await fetch("/api/update-stars", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(input),
          }).then((res) => res.json())) as SaveStarsResult;

          console.log(result!.success);
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
