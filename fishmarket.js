fish = ["catfish", "koi"];
let caught = 0;

class fish {
    constructor(type, color, price,amount) {
        this.type = type;
        this.color = color;
        this.price = price;
        this.amount = amount;
    };
};

let catfish = new fish("Catfish", "gray", 4,0 );
let koi = new fish("Koi", "red" , 200, 0);
let shark = new fish ("shark", "whit", 1000, 0 );

document.addElementByID("buttom").addeventlistener(click, function() {
        caught += 1
        Math.floor(Math.random()*fish.length) {
                
        }
    }
);
if (caught === 100) {
    fish.push(shark);
} 
