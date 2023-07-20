let counter = 1;
let image = document.querySelector('.blog').getElementsByTagName('img');

let CARD_TITLE = [
    'some',
    'Must-Have Accessories for Fashionistas',
    'Choosing the Perfect Gift for Every Occasion',
    'Benefits of Online Shopping',
    'Top 5 Trending Products You Need to Check Out',
    'The Ultimate Guide to Finding the Perfect Fit',
    'Why Shop with Us?'
];

let CARD_DESCRIPTION = [
    "some",
    'Elevate your style with these must-have accessories: statement handbags, stylish sunglasses, layered necklaces, classic watches, and bold hats. These accessories add a touch of glamour and sophistication to your outfit, allowing you to express your unique fashion sense.',
    'Finding the perfect gift can be challenging. Consider the recipients interests, personalize the gift, opt for memorable experiences, choose practical items, or go with a gift card to give them the freedom to choose. Thoughtful gifts show your love and consideration.',
    'Enjoy the advantages of online shopping: convenience, a wide selection of products, competitive prices, easy comparison, and hassle-free returns. Shop anytime and anywhere, find great deals, compare prices effortlessly, and enjoy the convenience of easy returns.',
    'Discover the hottest products trending right now in the world of e-commerce. From stylish clothing and accessories to innovative gadgets, weve rounded up the top five must-have items that are flying off the virtual shelves. Stay ahead of the curve and add these trendy products!',
    'Finding the right size when shopping online can be a challenge. In this comprehensive guide, well provide you with easy-to-use clothing size charts and essential tips to help you find the perfect fit. bodies are separate parts It is difficult to combine in a puzzle. is watering.',
    'Holding a coin by the cheek, Grasping the stern with a hand, Learning leads to light, And ignorance to darkness. Security will not be there, Free feed will not be poured, But complete clarity will come - Absolute clarity of Discover the advantages of shopping on our e-commerce platform'
];

document.querySelector('.slider__number').textContent = '0' + counter;
document.querySelector('.blog').querySelector('.card__title').textContent = CARD_TITLE[counter];
document.querySelector('.blog').querySelector('.card__description').textContent = CARD_DESCRIPTION[counter];

let buttonBackClick = function (e){
    counter--;
    if (counter<1) {
        counter=6;
    }
    console.log('\"images/blog-' + counter +'.webp\"');
    document.querySelector('.slider__number').textContent = '0' + counter;
    document.querySelector('.blog').querySelector('.card__title').textContent = CARD_TITLE[counter];
    document.querySelector('.blog').querySelector('.card__description').textContent = CARD_DESCRIPTION[counter];
    let element = document.getElementById('pictureImage');
    element.src = 'images/blog-' + counter +'.webp';
}

let buttonForwardClick = function (e){
    counter++;
    if (counter>6) {
        counter=1;
    }
    console.log('\"images/blog-' + counter +'.webp\"');
    document.querySelector('.slider__number').textContent = '0' + counter;
    document.querySelector('.blog').querySelector('.card__title').textContent = CARD_TITLE[counter];
    document.querySelector('.blog').querySelector('.card__description').textContent = CARD_DESCRIPTION[counter];
    let element = document.getElementById('pictureImage');
    element.src = 'images/blog-' + counter +'.webp';
    //image.setAttribute('src','image/blog-' + counter +'.jpg');
}