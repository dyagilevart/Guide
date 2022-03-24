const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        if (slide.classList.value !== 'box-flex slide act') {
            clearActiveClasses();
            slide.classList.add('act');
        } else {
            slide.classList.remove('act');
        }
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('act');
    })
}


const brands = document.querySelectorAll('.brand');

for (const brand of brands) {
    brand.addEventListener('mousedoun + mouseup', (e) => {
        action(e);
    });
    brand.addEventListener('mouseup', (e) => {
        action(e);
    });

}

const brandsChange = document.querySelectorAll('.brand-change');

for (const brand of brandsChange) {
    brand.addEventListener('click', (e) => {
        action(e);
    });
}

function action(e) {
    if (e.target.id === 'forward') {
        if (Number(localStorage.getItem('IdBrand')) + Number(1) < database.logo.length) {
            localStorage.setItem('IdBrand', Number(localStorage.getItem('IdBrand')) + Number(1));
            console.log(localStorage.getItem('IdBrand'));
        } else {
            history.back();
            return false;
        }
    } else if (e.target.id === 'back') {
        if (Number(localStorage.getItem('IdBrand')) - Number(1) >= 0) {
            localStorage.setItem('IdBrand', Number(localStorage.getItem('IdBrand')) - Number(1));
        } else {
            history.back();
            return false;
        }
    } else {
        localStorage.setItem('IdBrand', e.target.id);
    }
}