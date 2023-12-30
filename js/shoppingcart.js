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
}

function decreaseQuantity(item) {
    if (item === 1 && quantity1 > 1) {
        quantity1--;
        document.getElementById('quantity1').value = quantity1;
    } else if (item === 2 && quantity2 > 1) {
        quantity2--;
        document.getElementById('quantity2').value = quantity2;
    }
}


