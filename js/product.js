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
            // 在這裡你可以添加將商品添加到購物車的邏輯
        }

//rating
        
       
//stock        
        var stockQuantity = 10;

        // 更新库存量显示
        function updateStock() {
            document.getElementById('stock').innerText = stockQuantity;
        }

        // 调用函数，初始化时更新库存量显示
        updateStock();
        