export function calculateTotal(price,quantity,state){
    let subTotal = quantity * price;
    let discount = 0
    if (quantity >=1000){
        discount = subTotal * 0.03;
    }
    if (quantity >=3000){
        discount = subTotal * 0.05;
    }
    return  subTotal + (subTotal * taxState(state)) - calc_discount(quantity,subTotal) ;
}

function taxState(state){
    let taxes = {"":0, "UT":0.0665,"NV":0.08,"TX":0.0625,"AL":0.04,"CA":0.0825 };
    return taxes[state];
}

function calc_discount(quantity, subTotal ){
    let discount;
    switch (quantity){
        case (quantity <1000) && quantity:
            discount = 0;
            break;
        case (quantity >=30000) && quantity:
            discount = 0.15;
            break;
        case (quantity >=10000) && quantity:
            discount = 0.10;
            break;
        case (quantity >=7000) && quantity:
            discount = 0.07;
            break;
        case (quantity >=3000) && quantity:
            discount = 0.05;
            break;
        case (quantity >=1000) && quantity:
            discount = 0.03;
            break;
    }
    return subTotal * discount;
}
