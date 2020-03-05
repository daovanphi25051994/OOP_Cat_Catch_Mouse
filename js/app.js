let Cat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (weight) {
        this.weight = weight;
    };
    this.getSpeed = function () {
        return this.speed;
    };
    this.setSpeed = function (speed) {
        this.speed = speed;
    };
    this.speak = function () {
        console.log("yummy !!! My weight is : " + this.weight + " my speed is " + this.speed);
    };
    this.catchMouse = function (mouse) {
        if (this.speed > mouse.speed) {
            return true;
        } else {
            return false;
        }
    };
    this.eatMouse = function (mouse) {
        this.weight += mouse.weight;
        mouse.isAlive = false;
        this.speed--;
    }
};

let Mouse = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.isAlive = true;
    this.speak = function () {
        console.log("chit chit")
    }
};

let tom = new Cat("tom", 10, 20);
let jerry = new Mouse("jerry", 1, 15);
let jerry1 = new Mouse("jerry", 1, 15);
let jerry2 = new Mouse("jerry", 1.3, 14);
let jerry3 = new Mouse("jerry", 0.8, 18);
let jerry4 = new Mouse("jerry", 1.7, 13);

function action() {
    tom.catchMouse(jerry);
    if (tom.catchMouse(jerry) && jerry.isAlive) {
        tom.eatMouse(jerry);
        tom.speak();
    }
    tom.catchMouse(jerry1);
    if (tom.catchMouse(jerry1) && jerry1.isAlive) {
        tom.eatMouse(jerry1);
        tom.speak();
    }
    tom.catchMouse(jerry2);
    if (tom.catchMouse(jerry2) && jerry2.isAlive) {
        tom.eatMouse(jerry2);
        tom.speak();
    }
    tom.catchMouse(jerry3);
    if (tom.catchMouse(jerry3) && jerry3.isAlive) {
        tom.eatMouse(jerry3);
        tom.speak();
    }
    tom.catchMouse(jerry4);
    if (tom.catchMouse(jerry4) && jerry4.isAlive) {
        tom.eatMouse(jerry4);
        tom.speak();
    }
}

window.onload = action();

