/*
module.exports = {
    "calculate_taxes": calculate_taxes(total_price, percentage_taxes),
    "calculate_discount":calculate_discount(total_price, quantity),
}
*/

export function calculateTotal(price,quantity,tax){
    return  price*quantity;
}


/*
export function calcularTotal(price,quantity,tax){
    let sum_total_price = price*quantity;
    let calculated_tax = sum_total_price * (tax/100);
    let total_with_tax = sum_total_price + calculated_tax;
    if (has_it_discount(quantity, 3000)) return total_with_tax - (sum_total_price*0.05)
    if (has_it_discount(quantity, 1000)) return total_with_tax - (sum_total_price*0.03)
    return total_with_tax;
}

function has_it_discount(quantity, minimum_quantity){
    return quantity >= minimum_quantity
}
*/

/*

function impuestoEstado(estado) {
    let impuestos = { CA: 0.0825, UT: 0.0665, "": 0 };
    return impuestos[estado];
  }
  
  function calcularTotal(cantidad, precio, estado) {
    let subTotal = cantidad * precio;
    let impuesto = impuestoEstado(estado);
    subTotal = subTotal + subTotal * impuesto;
    return subTotal;
  }
  */