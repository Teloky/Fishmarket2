fishTarget = ["catfish", "koi"];

weight = Math.abs(Math.log(Math.random()*10)+((Math.log10(Math.random))/Math.log10(Math.random)))


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
let shark = new fish ("shark", "white", 1000, 0 );

document.getElementByID("buttom").addeventlistener("click", function() {
        caught += 1
        i = Math.floor(Math.random()*fishTarget.length); {
            fish.amount[i] +=1
        }
    }
);

 
if (caught === 100) {
    fish.push(shark);
} 

document.getElementByID("Sell").addeventlistener("click", function()) {
    Math.floor(Math.random()*fishTarget.length)

}
