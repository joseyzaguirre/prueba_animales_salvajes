class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        
        this._nombre = nombre
        this._edad = edad
        this._img = img
        this._comentarios = comentarios
        this._sonido = sonido

    };
    
    get nombre() {
        return this._nombre; 
    }
    get edad() {
        return this._edad; 
    }
    get img() {
        return this._img; 
    }
    set comentarios(nuevo_com) {
        this._comentarios = nuevo_com; 
    }
    get sonido() {
        return this._sonido; 
    }
};

export class Leon extends Animal {
    constructor(nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Leon.png', comentarios, 'assets/sounds/Rugido.mp3')
    }
    rugir(){
        const player = document.getElementById("player")
        player.innerHTML = `<source scr"${this.sonido}" type="audio/mpeg">`
        player.play();
    };
}

export class Lobo extends Animal {
    constructor(nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Lobo.jpg', comentarios, 'assets/sounds/Aullido.mp3')
    };
    aullar(){
        const player = document.getElementById("player")
        player.innerHTML = `<source scr"${this.sonido}" type="audio/mpeg">`
        player.play();
    };
}

export class Oso extends Animal {
    constructor(nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Oso.jpg', comentarios, 'assets/sounds/Gruñido.mp3')
    }
    grunir(){
        const player = document.getElementById("player")
        player.innerHTML = `<source scr"${this.sonido}" type="audio/mpeg">`
        player.play();
    };
}

export class Serpiente extends Animal {
    constructor(nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Serpiente.jpg', comentarios, 'assets/sounds/Siseo.mp3')
    }
    sisear(){
        const player = document.getElementById("player")
        player.innerHTML = `<source scr"${this.sonido}" type="audio/mpeg">`
        player.play();
    };
}

export class Aguila extends Animal {
    constructor(nombre, edad, comentarios) {
        super(nombre, edad, 'assets/imgs/Aguila.png', comentarios, 'assets/sounds/Chillido.mp3')
    }
    chillar(){
        const player = document.getElementById("player")
        player.innerHTML = `<source scr"${this.sonido}" type="audio/mpeg">`
        player.play();
    };
}



