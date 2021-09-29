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
  it("Prueba 4 - total price with discount (1 condition)", () => {
    expect(calcularTotal(20,100,10)).toEqual(2000);
  });
});

function calcularTotal(price,quantity,tax){
    sum_total_price = price*quantity;
    calculated_tax = sum_total_price * (tax/100);
    total_witn_tax = sum_total_price + calculated_tax;
    if (quantity >= 100 ) return total_witn_tax - (sum_total_price*0.10)
    return total_witn_tax;
}