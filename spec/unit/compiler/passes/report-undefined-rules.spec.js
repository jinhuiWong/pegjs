"use strict";

let peg = require("../../../../lib/peg");

describe("compiler pass |reportUndefinedRules|", function() {
  let pass = peg.compiler.passes.check.reportUndefinedRules;

  it("reports undefined rules", function() {
    expect(pass).toReportError("start = undefined", {
      message: "Rule \"undefined\" is not defined.",
      location: {
        start: { offset: 8, line: 1, column: 9 },
        end: { offset: 17, line: 1, column: 18 }
      }
    });
  });
});
