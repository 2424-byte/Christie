const assignmenttestimonial = [
    {
         name:'Ulrych Automatic Gold Stainless Steel Couples Watch',
         price: '$399,999.',
         Make: 'Ulrych jewellry',
         location: 'Calabar',
         image: ('new images/download.webp'),
         quantity: '300 items left',

    },

    {
        name:'4pcs Ladies Watch set',
        price: '$200,999.',
        Make: 'Ladies fashion',
        location: 'Calabar',
        image: ('new images/09127221-6286-499c-b958-8bf75e45f0dd.webp'),
        quantity: '200 items left',

   },

   {
    name:'Android smart watch',
    price: '$309,099.',
    Make: 'Ulrych jewellry',
    location: 'Calabar',
    image: ('new images/shopping (1).webp'),
    quantity: '700 items left',

},

{
    name:'Elegant Black Bownot shoe',
    price: '$800,709.',
    Make: 'polyester formal',
    location: 'Calabar',
    image: ('new images/shopping (4).webp'),
    quantity: '80 items left',

},

{
    name:'DSLR camera D3100 with 1877mm',
    price: '$900,999.',
    Make: 'Detachable Flas',
    location: 'Calabar',
    image: ('new images/shopping (5).webp'),
    quantity: '200 items left',

},

{
    name:'Fashion forward, men stylish Athletic shoe',
    price: '$30,999.',
    Make: 'Mesh casual lace up boot',
    location: 'Calabar',
    image: ('new images/shopping (4).webp'),
    quantity: '80 items left',

},

{
    name:'Rings for women, wedding ring for women',
    price: '$109,999.',
    Make: 'silver lsb grown',
    location: 'Calabar',
    image: ('new images/shopping.webp'),
    quantity: '707 items left',

},

{
    name:'Classic Crush Clogs',
    price: '$433,999.',
    Make: 'Casual.com.ng',
    location: 'Calabar',
    image: ('new images/shopping (3).webp'),
    quantity: '210 items left',

},

{
    name:'xiaomi pad',
    price: '$899,777.',
    Make: 'trigger electronic',
    location: 'Calabar',
    image: ('new images/8c3c3d2e-6201-4650-a281-8872203f4103.webp'),
    quantity: '212 items left',

},

{
    name:'Riggs body spray',
    price: '$20,99.',
    Make: 'spray love',
    location: 'Calabar',
    image: ('new images/download (2).webp'),
    quantity: '431 items left',

},

{
    name:'shoes (black)',
    price: '$212,999.',
    Make: 'jumbo Sport Mart',
    location: 'Calabar',
    image: ('new images/download (1).webp'),
    quantity: '213 items left',

},

{
    name:'iphone 1Pro Max 48233GB ',
    price: '$999,999.',
    Make: 'Max phones',
    location: 'Calabar',
    image: ('new images/shopping (4).webp'),
    quantity: '122 items left',

},

{
    name:'Envy 13x370 Touchscreen131 Gen intel corei3',
    price: '$999,999.',
    Make: 'Smartphones pro',
    location: 'Calabar',
    image: ('new images/download (3).webp'),
    quantity: '111 items left',

},

{
    name:'Unisex classic hiker clog',
    price: '$123,999.',
    Make: 'casual.log',
    location: 'Calabar',
    image: ('new images/shopping (2).webp'),
    quantity: '400 items left',

},

{
    name:'Redmi 14c 4884GB',
    price: '$232,999.',
    Make: 'Andriod.Redmi',
    location: 'Calabar',
    image: ('new images/download (5).webp'),
    quantity: '121 items left',

},

{
    name:'wireless light camera wifi',
    price: '729,999.',
    Make: 'Mini Digital',
    location: 'Calabar',
    image: ('new images/1.jpg'), 
    quantity: '143 items left',

},

{
    name:'Exotic Studded Rhinestone Womens Wireswatch',
    price: '$199,999.',
    Make: 'Alpha jwellery',
    location: 'Calabar',
    image: ('new images/0c806d17-6a96-4ed2-b501-dd7f9e09fb85.webp'),
    quantity: '212 items left',

},

{
    name:'Durable Yukon clogs',
    price: '$121,999.',
    Make: 'Casual.log',
    location: 'Calabar',
    image: ('new images/download (1).webp'),
    quantity: '232 items left',

},

{
    name:'Deskjet 2720 Allinone',
    price: '$878,777.',
    Make: 'stream 11',
    location: 'Calabar',
    image: ('new images/download (4).webp'),
    quantity: '13 items left', 
            
},

] 

const imgEL=document.querySelector ('img'); 
const newEl=document.querySelector ('.new'); 
const newaEl=document.querySelector ('.newa');
const newbEl=document.querySelector ('.newb');
const newcEl=document.querySelector ('.newc');
const newdEl=document.querySelector ('.newd');


let idx = 0;

updateassignmenttestimonial();

function updateassignmenttestimonial() {
    const {name, price, Make, location, image, quantity} = assignmenttestimonial [idx];
    imgEL.src = image;
    newEl.innerText = name;
    newaEl.innerText = price;
    newbEl.innerText = Make;
    newcEl.innerText = location;
    newdEl.innerText = quantity;
    idx++;

    if (idx === assignmenttestimonial.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateassignmenttestimonial();
    }, 1500);
}



