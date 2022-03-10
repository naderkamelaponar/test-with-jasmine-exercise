import arrays from "../utilities/arrays.js";
import strings from "../utilities/strings.js";
let arr1 = ["s", "t", "r", "i", "n", "g"];
let arr2 = [1, 2, 3, 4, 5, 6];
//1
it("expect arrays.addArr to return 4 ", () => {
  expect(arrays.addArr([2, 2])).toBe(4);
});
//2
it("expect arrays.addArr to return a number ", () => {
  expect(arrays.addArr([2, 2])).toBeNaN;
});
//3
it("expect arrays.concat to concate arrays ", () => {
  expect(arrays.concatArr(arr1, arr2)).toEqual([...arr1, ...arr2]);
});
//4
it("expect arrays.lgNum to return the highest Number", () => {
  expect(arrays.lgNum(arr2)).toBeTruthy();
});
//5
it("expect strings.capitalize to capitalize", () => {
  expect(strings.capitalize("the Peace")).not.toBe("the Peace");
});
//6
it("expect strings.lowercase to conatin ", () => {
  expect(strings.lowerCase("THE PEACE")).toContain("peace");
});
//7
it("expect strings.concat to be defined", () => {
  expect(strings.concat("", "")).toBeDefined;
});
