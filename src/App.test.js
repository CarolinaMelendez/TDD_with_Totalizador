// import calcularTotal from "./App.js";

describe("calcular total", () => {
  it("Prueba 1.1 - get price", () => {
    expect(calcularTotal(10,1,0)).toEqual(10);
  });
  it("Prueba 1.2 - get price", () => {
    expect(calcularTotal(20,1,0)).toEqual(20);
  });
  it("Prueba 2 - get total price", () => {
    expect(calcularTotal(20,10,0)).toEqual(200);
  });
  it("Prueba 3 - get total price with tax", () => {
    expect(calcularTotal(20,10,10)).toEqual(220);
  });
});

function calcularTotal(price,quantity,tax){
    total_price = price*quantity
    calculated_tax = total_price * (tax/100)
    return total_price + calculated_tax;
}