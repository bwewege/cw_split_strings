import { splitString } from "../src/split";
//* 'abc' =>  ['ab', 'c_']
//* 'abcdef' => ['ab', 'cd', 'ef']

describe("Split character", () => {
  it("Split even number of chars into pairs", () => {
    expect(splitString("abcdef")).toEqual(["ab", "cd", "ef"]);
  });
  it("Split even number of chars into pairs", () => {
    expect(splitString("ghyhyh")).toEqual(["gh", "yh", "yh"]);
  });
});
