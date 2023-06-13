let counter = 1;
let image = document.querySelector('.blog').getElementsByTagName('img');

let CARD_TITLE = [
    'some',
    'Colourful Offer ;',
    'Running Offer ;',
    'Absolute clarity of shapes - 1',
    'Absolute clarity of shapes - 2',
    'Absolute clarity of shapes - 3',
    'Absolute clarity of shapes - 4'
];

let CARD_DESCRIPTION = [
    "some",
    'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive ',
    'Pellentesque at semper nisi. Cras venenatis ante vel sollicitudin dignissim. Nulla at dictum eros, nec tempor augue. Sed elit ligula, volutpat quis ex sit amet, sodales cursus neque. Curabitur fermentum nunc semper lectus hendrerit dictum. Quisque libero tellus, tincidunt nec sem vel, iaculis dictum urna. Vivamus',
    'Grave of white snowdrifts, Soft as milk, Vodka taught us, That its easy to die.Lamps, like planets, Float overhead.Traumatology is it ? Or the last judgment?',
    'Have the wings covered us? Has it drifted like a blizzard? Winters have taught us, That it is warm to freeze. We move horizontally Without the help of arms and legs, Into an endless bedroom, Where, perhaps, God will meet.',
    'Will collapse without effort All this big top. The women taught us that no one will cry for us. Shadows huddle on the walls. This or this light? We ought to kneel, Only there are no knees.',
    'The bodies are separate parts It is difficult to combine in a puzzle. Our bosses taught us not to believe and not to ask. The salt in my eyes is watering, The phone is inactive, Through the waves of the muddy Styx Carries the gloomy Charon.',
    'Holding a coin by the cheek, Grasping the stern with a hand, Learning leads to light, And ignorance to darkness. Security will not be there, Free feed will not be poured, But complete clarity will come - Absolute clarity of forms.'
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