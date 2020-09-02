function init() {
    generate_colors_btn = document.getElementById('new-colors-btn');
    easy_btn = document.getElementById('easy-btn');
    hard_btn = document.getElementById('hard-btn');
    color_label = document.getElementById('color-label');
    toast = document.getElementById('toast');
    header = document.getElementById('header');

    generateColors();

    easy_btn.addEventListener('click', difficultyChanged);
    hard_btn.addEventListener('click', difficultyChanged);
    generate_colors_btn.addEventListener('click', generateColors);
}

function generateColors() {
    gameEnd = false;
    header.style.background = '#3581b8';
    toast.innerHTML = '';
    swatches = document.querySelectorAll('#colors-section div div button.show');
    correct_swatch = Math.floor(Math.random() * swatches.length);
    let color = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
    color_label.innerHTML = 'RGB(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')';

    for (let i = 0; i < swatches.length; i++) {
        if (i === correct_swatch) {
            swatches[i].style.background = color_label.innerHTML.toLowerCase();
        } else {
            let random_color = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
            swatches[i].style.background = 'rgb(' + random_color[0] + ', ' + random_color[1] + ', ' + random_color[2] + ')';
        }
        swatches[i].addEventListener('click', swatchClicked);
    }
}

function difficultyChanged(event) {
    let all_swatches = document.querySelectorAll('#colors-section div div button');
    if (event.currentTarget === easy_btn && easy_btn.classList[1] !== 'selected') {
        easy_btn.classList.add('selected');
        hard_btn.classList.remove('selected');
        for (let i = 0; i < all_swatches.length; i++) {
            if (i >= 3) {
                all_swatches[i].classList.add('hide');
                all_swatches[i].classList.remove('show');
            } else {
                all_swatches[i].classList.add('show');
            }
        }
        generateColors();
    } else if (event.currentTarget === hard_btn && hard_btn.classList[1] !== 'selected') {
        easy_btn.classList.remove('selected');
        hard_btn.classList.add('selected');
        for (let i = 0; i < all_swatches.length; i++) {
            if (i >= 3) {
                all_swatches[i].classList.add('show');
                all_swatches[i].classList.remove('hide');
            } else {
                all_swatches[i].classList.add('show');
            }
        }
        generateColors();
    }
}

function swatchClicked(event) {
    if (!gameEnd) {
        if (event.currentTarget.style.background === color_label.innerHTML.toLowerCase()) {
            toast.innerHTML = 'Correct!';
            header.style.background = color_label.innerHTML.toLowerCase();
            for (let i = 0; i < swatches.length; i++) {
                swatches[i].style.background = color_label.innerHTML.toLowerCase();
                swatches[i].classList.remove('invisible');
            }
            gameEnd = true;
        }
        else {
            toast.innerHTML = 'Try again!';
            event.currentTarget.classList.add('invisible');
        }
    }
}


let generate_colors_btn, easy_btn, hard_btn, color_label, correct_swatch, swatches, toast, header, gameEnd;

init()