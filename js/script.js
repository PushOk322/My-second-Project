const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
    const menuLinks = document.querySelector('.header__links');
    const menuSign = document.querySelector('.header__buttons');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuLinks.classList.toggle('_active');
        menuSign.classList.toggle('_active');
    });
}






const cards = [
    {
        "image": "https://i.ibb.co/qk3WZzd/bouquet-cart1.png",
        "name": "Ніжна свіжість",
        "flovers": "троянди та лілії",
        "price": 445
    },
    {
        "image": "https://i.ibb.co/kSqMtYg/bouquet-cart2.png",
        "name": "Сорбет",
        "flovers": "хризантеми та троянди",
        "price": 450
    },
    {
        "image": "https://i.ibb.co/P9mTcQT/bouquet-cart3.png",
        "name": "Yellow song",
        "flovers": "соняшники та солідаго",
        "price": 455
    },
    {
        "image": "https://i.ibb.co/M8NL0gT/bouquet-cart4.png",
        "name": "Персиковий нектар",
        "flovers": "лілії та троянди",
        "price": 455
    },
    {
        "image": "https://i.ibb.co/LYMJ9mc/bouquet-cart5.png",
        "name": "Аврора",
        "flovers": "лілії та троянди",
        "price": 460
    },
    {
        "image": "https://i.ibb.co/Y7jdbq5/bouquet-cart6.png",
        "name": "Класика кохання",
        "flovers": "червоні троянди",
        "price": 465
    }
];


{/* <div class="catalog__block">
        <img src="/img/bouquet_cart1 1.png" alt="bouquet_cart" class="catalog__block-img">
        <div class="catalog__block-name">Ніжна свіжість:</div>
        <div class="catalog__block-flowers">хризантеми та троянди</div>
        <div class="catalog__block-price">445 грн</div>
        <button class="button-transparent">В кошик</button>
    </div> */}

function createContentTemplate(card) {
    const block = ` <div class="catalog__block">
                    <img src="${card.image}" alt="bouquet_cart" class="catalog__block-img">
                    <div class="catalog__block-name">${card.name}</div>
                    <div class="catalog__block-flowers">${card.flovers}</div>
                    <div class="catalog__block-price">${card.price}</div>
                    <button class="button-transparent">В кошик</button>
                </div>`;
    return createFragmentTemplate(block);
};

function createFragmentTemplate(str) {
    const template = document.createElement('template');
    template.innerHTML = str;
    return template.content;
}

function appendContent(content) {
    const el = document.querySelector('.catalog__container');
    el.appendChild(content);
}

function init(cards) {
    const fragment = document.createDocumentFragment();
    cards.forEach((card) => {
        fragment.appendChild(createContentTemplate(card));
    });
    appendContent(fragment);
}

init(cards);


//OOP
// class Card {
//     constructor(card) {
//         this.img = card.image;
//         this.name = card.name;
//         this.flovers = card.flovers;
//         this.price = card.price;
//     }

//     createContent() {
//         //block
//         const block = document.createElement('div');
//         block.classList.add("catalog__block");
//         //img
//         const img = document.createElement('img');
//         img.classList.add("catalog__block-img");
//         img.src = this.img;
//         //name
//         const name = document.createElement('div');
//         name.classList.add("catalog__block-name");
//         name.textContent = this.name + ":";
//         //flowers
//         const flovers = document.createElement('div');
//         flovers.classList.add("catalog__block-flowers");
//         flovers.textContent = this.flovers;
//         //price
//         const price = document.createElement('div');
//         price.classList.add("catalog__block-price");
//         price.textContent = this.price + " грн";
//         //button
//         const button = document.createElement('button');
//         button.classList.add("button-transparent");
//         button.textContent = "В кошик";

//         block.appendChild(img);
//         block.appendChild(name);
//         block.appendChild(flovers);
//         block.appendChild(price);
//         block.appendChild(button);
//         return block;
//     }
// }

// class App {
//     static renderAll(cards) {
//         const container = document.querySelector(".catalog__container");
//         const fragment = document.createDocumentFragment();
//         cards.forEach((card) => {
//             fragment.appendChild(new Card(card).createContent());
//             container.appendChild(fragment);
//         })
//     }
// }

// App.renderAll(cards);





