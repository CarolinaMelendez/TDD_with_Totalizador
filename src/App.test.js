// import calcularTotal from "./App.js";

describe("calcular total", () => {
  it("Prueba 1 - totalizador", () => {
    expect(calcularTotal(10)).toEqual(10);
  });
  it("Prueba 1 - totalizador", () => {
    expect(calcularTotal(20)).toEqual(20);
  });
});

function calcularTotal(precio){
    return precio;
}