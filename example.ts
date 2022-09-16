export function assert(condition: any, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

export const thing: string | undefined = "stuff";

assert(thing, "Thing is missing");

thing;
