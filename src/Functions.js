export function calculateTotal(price,quantity,state){
    let subTotal = quantity * price;
    let discount = 0
    if (quantity >=1000){
        discount = subTotal * 0.03;
    }
    return  subTotal + (subTotal * taxState(state)) - discount;
}

function taxState(state){
    let taxes = {"":0, "UT":0.0665,"NV":0.08,"TX":0.0625,"AL":0.04,"CA":0.0825 };
    return taxes[state];
}
