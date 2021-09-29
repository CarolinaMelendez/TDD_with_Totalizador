// import calcularTotal from "./App.js";

describe("calcular total", () => {
  it("Prueba 1.1 - get price", () => {
    expect(calcularTotal(10,1)).toEqual(10);
  });
  it("Prueba 1.2 - get price", () => {
    expect(calcularTotal(20,1)).toEqual(20);
  });
  it("Prueba 2 - get total price", () => {
    expect(calcularTotal(20,10)).toEqual(200);
  });
});

function calcularTotal(precio,quantity){
    return precio*quantity;
}