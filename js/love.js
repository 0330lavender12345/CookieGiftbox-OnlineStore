let currentIndex = 0;  // 初始化当前索引
        const images = ["image/love1.png", "image/love3.png", "image/love2.png"];  // 替换为你的图片路径
        
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