class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftBtn = this.carousel.querySelector('.left-button');
        this.rightBtn = this.carousel.querySelector('.right-button');
        this.imgs = this.carousel.querySelectorAll('img');
        this.currentIndex = 0;
        this.imgs[this.currentIndex].style.display = 'block';
        this.imgs.forEach(img => img.classList.add('animated', 'fadeIn'));
        this.rightBtn.addEventListener('click', () => this.cycleNextCarousel());
        this.leftBtn.addEventListener('click', () => this.cyclePrevCarousel());
    }

    cycleNextCarousel() {
        this.imgs.forEach(img => {
            img.style.display = 'none'
        });
        if (this.currentIndex < this.imgs.length - 1) {
            this.currentIndex++
        } else {
            this.currentIndex = 0;
        }
        this.imgs[this.currentIndex].style.display = 'block';

      
    }

    cyclePrevCarousel() {
        this.imgs.forEach(img => img.style.display = 'none');

        if (this.currentIndex > 0) {
            this.currentIndex--
        } else {
            this.currentIndex = this.imgs.length - 1;
        }
        this.imgs[this.currentIndex].style.display = 'block';
    }
}

let carousel = document.querySelectorAll('.carousel').forEach(slider => new Carousel(slider));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
