export function calculateTotal(price,quantity,state){
    let subTotal = quantity * price;
    return  subTotal + (subTotal * taxState(state));
}

function taxState(state){
    let taxes = {"":0, "UT":0.0665,"NV":0.08,"TX":0.0625,"AL":0.04,"CA":0.0825 };
    return taxes[state];
}
