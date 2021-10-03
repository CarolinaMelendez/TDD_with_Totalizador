// import calcularTotal from "./App.js";
//import { exportAllDeclaration } from "@babel/types";
import {calculateTotal } from "./Functions";

describe("-- Totalizer --", () => {
  it("Test 1.1 - calculate quantity",() => {
    expect(calculateTotal(2,1,"")).toEqual(2);
  });
  it("Test 1.2 - calculate quantity",() => {
    expect(calculateTotal(2,3,"")).toEqual(6);
  });
});

