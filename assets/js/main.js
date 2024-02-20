
const discount_underage = 0.2
const discount_over = 0.4
const price_km = 0.21
let distance;
let age;

function getValue() {
    const user_name = document.getElementById("user_name").value;
    console.log(user_name);
    const distance = document.getElementById("distance").value;
    console.log(distance);
}

function getSelectedOption() {
    const selectElement = document.getElementById("selectOptions");
    const age = selectElement.options[selectElement.selectedIndex].value;
    console.log(age);
  }
  
  
let price = (distance * price_km)

if (age = "adult") {
    let price = (price - price * discount_underage).toFixed(2);

} else if (age = over) {
    let price = (price - price * discount_over).toFixed(2);

} else {
    let price = price.toFixed(2);

}

