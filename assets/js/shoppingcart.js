let quantity1 = 1;
let quantity2 = 1;

function increaseQuantity(item) {
    if (item === 1) {
        quantity1++;
        document.getElementById('quantity1').value = quantity1;
    } else if (item === 2) {
        quantity2++;
        document.getElementById('quantity2').value = quantity2;
    }
    updateTotalPrice();
}

function decreaseQuantity(item) {
    if (item === 1 && quantity1 > 1) {
        quantity1--;
        document.getElementById('quantity1').value = quantity1;
    } else if (item === 2 && quantity2 > 1) {
        quantity2--;
        document.getElementById('quantity2').value = quantity2;
    }
    updateTotalPrice();
}

function updateTotalPrice() {
    const quantity1Value = parseInt(document.getElementById('quantity1').value);
    const quantity2Value = parseInt(document.getElementById('quantity2').value);

    const total1 = quantity1Value * 575;
    const total2 = quantity2Value * 320;

    const totalPrice = total1 + total2;

    document.getElementById('total1').innerText = total1;
    document.getElementById('total2').innerText = total2;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('quantity1').addEventListener('input', function () {
    quantity1 = parseInt(this.value) || 1;
    updateTotalPrice();
});

document.getElementById('quantity2').addEventListener('input', function () {
    quantity2 = parseInt(this.value) || 1;
    updateTotalPrice();
});