const name_item = document.querySelector("#item-name-input");
const quantity = document.querySelector("#quantity-input");
const price = document.querySelector("#price-input");
const percentage_tax = document.querySelector("#tax-input");

// Text for page
const total_price = document.querySelector("#total-price-output");
const tax= document.querySelector("#tax-output");
const price_with_tax = document.querySelector("#price-With-tax-output");

//const taxes_price = document.querySelector("")

const form = document.querySelector("#ventas-form")

function calculate_taxes(total_price, percentage_taxes){
    return total_price * (percentage_taxes / 100);
}

/*
function calculate_discount(total_price ){
    discount_percentage = 0
    if(quantity.v >= 1000  &&  quantity < 3000 ){
        discount_percentage = 0.03
    }else if(quantity >= 3000  &&  quantity < 7000 ){
        discount_percentage = 0.05
    }else if(quantity >= 7000  &&  quantity < 10000 ){
        discount_percentage = 0.07
    }
    else if(quantity >= 10000  &&  quantity < 30000 ){
        discount_percentage = 0.1
    }else{
        // mayor que 30000
        discount_percentage = 0.15
    }

    return total_price * discount_percentage
}
*/

form.addEventListener("submit",event=>{
    event.preventDefault();
    totalPrice = quantity.value * price.value;
    tax_value = calculate_taxes(totalPrice, percentage_tax.value);
    total_with_tax = totalPrice + tax_value;

    // show in page
    total_price.innerHTML = "Total price = " + totalPrice;
    tax.innerHTML = "Tax = " + tax_value ;
    price_with_tax.innerHTML = "Total with TAX = " + total_with_tax ;
});

/*
function isAnIndex(index,lenght){
    var ans = false;
    if (index<lenght && index>0){
        ans = true;
    }
    return ans;
}

function valueIntervalFinder(value,limits)
{
    var interval;
    if (value<limits[0])
    {
        interval = 0
    }
    else if (value >limits[limits.length-1])
    {
        interval = limits.length
    }
    else
    {
        for(var i=0;i<limits.length;i=i+1)
        {
            if (limits[i]<=value && value<=limits[i+1])
            {
                interval = i + 1;
            }
        }
    }
    return interval;
}
function greetingSelector(name,age,gender){
    var greetings = {
        0:{
            "male":"Hola amigo",
            "female":"Hola amiga"
        },
        1:{
            "male":"Que tal",
            "female":"Que tal"
        },
        2:{
            "male":"Como esta Don",
            "female":"Como esta Sra."
        }
    }
    var greetings_by_time = {
        0:"Buen día",
        1:"Buenas tardes",
        2:"Buena noche"
    }
    var limits = [20,45]
    group = valueIntervalFinder(age,limits);
    var current_time = new Date(); 
    var time_limits = [new Date().setHours(12,0),new Date().setHours(18,0)]
    time_group = valueIntervalFinder(current_time,time_limits)
    //alert(current_time)
    return greetings[group][gender] + " " + name + ". "+greetings_by_time[time_group]+"."
}

form.addEventListener("submit",event=>{
    event.preventDefault();
    greeting_message = greetingSelector(nombre.value,edad.value,genero.value)
    greeting_element.innerHTML = greeting_message;
})
*/

