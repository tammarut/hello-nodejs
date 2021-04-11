export function foo() {
  return baz();
}

function baz() {
  return "buzz";
}

export const lib = {
  baz,
};
