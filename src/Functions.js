/*
module.exports = {
    "calculate_taxes": calculate_taxes(total_price, percentage_taxes),
    "calculate_discount":calculate_discount(total_price, quantity),
}
*/

function control_bad_inputs(document,name_item,quantity ,price){
    badInput = false;
    if(!isNaN(name_item.value)){
        document.write("<p> UUUUuuppss ¡¡¡  <br/>");
        document.write(name_item.value + " no es un nombre de item valido :P  <br/>");
        document.write(" Por favor, vuelva a hacer cargar la pagina e intentelo de nuevo <br/><br/> </p>");
        badInput = true;
    }
    if (quantity.value <= 0){
        document.write("<p> El valor de la cantidad no es valido!!! <br/><br/> </p>");
        badInput = true;
    }
    if (price.value <= 0){
        document.write("<p> El valor del precio no es valido!!! <br/><br/> </p>");
        badInput = true;
    }
    if (badInput){
        document.write("<img src=\"https://bit.ly/3zLJARJ\"");
    }
}

export const My_Functions = {
    control_bad_inputs
};