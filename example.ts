export const thing: string | undefined = "stuff";

if (!thing) {
  throw new Error("It broke");
}

// ⬇️

assert(thing, "It broke");

thing;

export function assert(condition: any, message: string): asserts condition {
  if (!condition) throw new Error(message);
}
