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

  it("Test 2.1 - calculate with tax CA",() => {
    expect(calculateTotal(2,3,"CA")).toEqual(6.495);
  });
  it("Test 2.2 - calculate with tax CA",() => {
    expect(calculateTotal(5,3,"CA")).toEqual(16.2375);
  });

  it("Test 3.1 - calculate with diferents states",() => {
    expect(calculateTotal(5,3,"UT")).toEqual(15.9975);
  });
  it("Test 3.2 - calculate with diferents states",() => {
    expect(calculateTotal(5,3,"NV")).toEqual(16.2);
  });
  it("Test 3.3 - calculate with diferents states",() => {
    expect(calculateTotal(5,3,"TX")).toEqual(15.9375);
  });

  it("Test 4.1 - calculate with one discount",() => {
    expect(calculateTotal(5,1000,"AL")).toEqual(5050);
  });
  it("Test 5.1 - calculate with variety of discounts",() => {
    expect(calculateTotal(5,3000,"AL")).toEqual(14850);
  });
  it("Test 5.2 - calculate with variety of discounts",() => {
    expect(calculateTotal(5,7000,"AL")).toEqual(33950);
  });
  it("Test 5.3 - calculate with variety of discounts",() => {
    expect(calculateTotal(5,10000,"AL")).toEqual(47000);
  });
  it("Test 5.4 - calculate with variety of discounts",() => {
    expect(calculateTotal(5,30000,"AL")).toEqual(133500);
  });
});

