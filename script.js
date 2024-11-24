<script>
    const carouselItems = document.querySelector('.carousel-items');
    const leftButton = document.querySelector('.carousel-button.left');
    const rightButton = document.querySelector('.carousel-button.right');
    let currentIndex = 0;

    // Handle right arrow click
    rightButton.addEventListener('click', () => {
        const totalItems = document.querySelectorAll('.carousel-item').length;
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first item
        }
        carouselItems.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    // Handle left arrow click
    leftButton.addEventListener('click', () => {
        const totalItems = document.querySelectorAll('.carousel-item').length;
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1; // Loop back to the last item
        }
        carouselItems.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
</script>
