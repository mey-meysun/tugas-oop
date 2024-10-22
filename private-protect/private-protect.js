class cetakNama {
    #name; 
    constructor(name){
        this.#name = name;
    }

    get getName(){
        return this.#name;
    }

    set setName(value){
        this.#name = value;
    }

    #sayHello(name){
        console.log(`Hello ${name}`)
    }

    #sayBye(name){
        console.log(`Good Bye`)
    }

    say(name){
        if(name){
            this.#sayHello(name);
        } else {
            this.#sayBye();
        }
    }
}

const nama1 = new cetakNama(`Memey`);
const nama2 = new cetakNama(`Suwendo`);

nama1.say(`Tiara`);
nama2.say()