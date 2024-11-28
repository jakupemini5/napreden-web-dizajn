class Human {
    constructor(ime, vozrast) {
        this.ime = ime;
        this.vozrast = vozrast;
        this.stomach = [];
    }

    // Use regular methods for class behavior
    eat(thing) {
        if (this.stomach.length < 10) {
            this.stomach.push(thing);
        }
    }   

    digest() {
        this.stomach = [];
    }

    toString() {
        return `${this.ime}, ${this.vozrast}`;
    }
}

class Baby extends Human {
    constructor(ime, vozrast, igracka) {
        super(ime, vozrast);
        this.igracka = igracka;
    }

    play() {
        return `Baby ${this.ime}, ${this.vozrast} is playing with ${this.igracka}`
    }
}