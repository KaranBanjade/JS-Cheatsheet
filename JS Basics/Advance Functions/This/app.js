const cat = {
    name: "blue steele",
    color: 'grey',
    breed: 'unknown',
    meow(){
        console.log(`${this.name} says MEOW MEOW MEOW`);
    }
};

const meow2 = cat.meow;