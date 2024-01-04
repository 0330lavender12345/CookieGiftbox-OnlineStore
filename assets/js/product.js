//shopping cart
document.addEventListener('DOMContentLoaded', function () {
    const openCartBtn = document.getElementById('openCartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartContainer = document.getElementById('cartContainer');
  
    openCartBtn.addEventListener('click', function () {
      cartContainer.style.right = '0';
    });
  
    closeCartBtn.addEventListener('click', function () {
      cartContainer.style.right = '-300px';
    });
  });  

//quantitybutton
let quantity = 1;

        function increaseQuantity() {
            quantity++;
            document.getElementById('quantity').value = quantity;
        }

        function decreaseQuantity() {
            if (quantity > 1) {
                quantity--;
                document.getElementById('quantity').value = quantity;
            }
        }

//addtocart
        function addToCart() {
            const cartQuantity = parseInt(document.getElementById('cartQuantity').innerText);
            document.getElementById('cartQuantity').innerText = cartQuantity + quantity;
            
        }
//rating
document.addEventListener('DOMContentLoaded', function () {
    const ratingContainer = document.querySelector('.rating');
    const stars = document.querySelectorAll('.star');

    stars.forEach(function (star) {
        star.addEventListener('mouseover', function () {
            const value = this.getAttribute('data-value');
            highlightStars(value);
        });

        star.addEventListener('mouseout', function () {
            const currentValue = ratingContainer.getAttribute('data-rating');
            highlightStars(currentValue);
        });

        star.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            ratingContainer.setAttribute('data-rating', value);
            
            sendDataToBackend(value);
        });
    });

    function highlightStars(value) {
        stars.forEach(function (star) {
            star.style.color = value >= star.getAttribute('data-value') ? '#f8d30b' : '#ddd';
        });
    }

    function sendDataToBackend(value) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/your-backend-endpoint', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ rating: value }));

        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log('評分資訊成功傳送到後端');
            } else {
                console.error('評分資訊傳送失敗');
            }
        };
    }
});


       
//stock        
        var stockQuantity = 10;

        
        function updateStock() {
            document.getElementById('stock').innerText = stockQuantity;
        }
        updateStock();
        