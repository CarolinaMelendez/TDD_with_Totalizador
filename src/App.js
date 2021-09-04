const name_item = document.querySelector("#item-name-input");
const quantity = document.querySelector("#quantity-input");
const price = document.querySelector("#price-input");

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
function calcualte_discount(total_price, percentage_discount){
    return 
}
*/

form.addEventListener("submit",event=>{
    event.preventDefault();
    totalPrice = quantity.value * price.value;
    tax_value = calculate_taxes(totalPrice, 6.65);
    total_with_tax = totalPrice + tax_value;
    alert("Item name "+ name_item.value);
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

