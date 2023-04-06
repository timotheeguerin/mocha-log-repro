const { strictEqual } = require("assert");
it("test", () => {
  console.log("Line 1");
  console.log("Line 1");
  console.log("Line 3");
  strictEqual(1 === 2, "Fail1");
});
