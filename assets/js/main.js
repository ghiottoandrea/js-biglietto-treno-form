
btn.addEventListener("click", function () {
    const user_name = getUsername();
    const distance = getDistance();
    const age = getAge();

    getPrice(distance, age);
    getPlace(user_name, finalPrice);
    getTicket(age);
});

function getDistance() {
    const distance = document.getElementById("distance").value;
    console.log(distance);
    return distance;
}

function getUsername() {
    const user_name = document.getElementById("user_name").value;
    console.log(user_name);
    return user_name;

}

function getAge() {
    const selectElement = document.getElementById("selectOptions");
    const age = selectElement.options[selectElement.selectedIndex].value;
    console.log(age);
    return age;
}

function getPrice(distance, age) {
    const discount_underage = 0.2
    const discount_over = 0.4
    const price_km = 0.21

    let price = distance * price_km;

    if (age === "minor") {
        finalPrice = (price - price * discount_underage).toFixed(2);
    } else if (age === "over") {
        finalPrice = (price - price * discount_over).toFixed(2);
    } else {
        finalPrice = price.toFixed(2);
    }

    console.log(finalPrice);
    return finalPrice;
}

function getPlace(user_name, finalPrice) {
    passenger_name.innerHTML = user_name
    ticket_price.innerHTML = (finalPrice+"€")
    let carriage_number = Math.floor(Math.random() * 10) + 1;
    let code_number = Math.floor(10000 + Math.random() * 90000);
    code.innerHTML = code_number
    n_carriage.innerHTML = carriage_number

}

function getTicket(age) {
    if (age === "minor") {
        ticket_type.innerHTML = "Biglietto ridotto"
    } else if (age === "over") {
        ticket_type.innerHTML = "Biglietto senior"
    } else {
        ticket_type.innerHTML = "Biglietto standard"
    }
}
