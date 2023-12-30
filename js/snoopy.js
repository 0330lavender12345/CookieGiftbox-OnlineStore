let currentIndex = 0;  // 初始化当前索引
        const images = ["image/SNOOPY1.jpg", "image/SNOOPY3.jpg", "image/SNOOPY2.jpg"];  // 替换为你的图片路径
        
        function changeSlideTo(index) {
            currentIndex = index;
            updateSliderImage();
        }
        function changeSlide(direction) {
            currentIndex += direction;
        
            // 处理循环切换图片，如果 currentIndex 超出边界
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            } else if (currentIndex >= images.length) {
                currentIndex = 0;
            }
        
            updateSliderImage();
        }
        
        function updateSliderImage() {
            const sliderImage = document.getElementById("sliderImage");
            sliderImage.src = images[currentIndex];
        }
        
        document.addEventListener('DOMContentLoaded', function () {
            const leftButton = document.getElementById("leftbutton");
            const rightButton = document.getElementById("rightbutton");
        
            leftButton.addEventListener('click', function () {
                changeSlide(-1);
            });
        
            rightButton.addEventListener('click', function () {
                changeSlide(1);
            });
        });

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
                    // 在這裡添加將評分資訊傳送到後端的程式碼
                    sendDataToBackend(value);
                });
            });
        
            function highlightStars(value) {
                stars.forEach(function (star) {
                    star.style.color = value >= star.getAttribute('data-value') ? '#f8d30b' : '#ddd';
                });
            }
        
            function sendDataToBackend(value) {
                // 使用 XMLHttpRequest 或 Fetch API 將評分資訊傳送到後端
                // 這裡僅為示範，實際上需要根據你的後端接口進行相應的修改
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

        // 更新库存量显示
        function updateStock() {
            document.getElementById('stock').innerText = stockQuantity;
        }

        // 调用函数，初始化时更新库存量显示
        updateStock();
        