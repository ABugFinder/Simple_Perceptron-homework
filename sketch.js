var puntos = [];
var tam;
const maxPuntos = 5;

function setup() {
    createCanvas(600, 600);
    
    for(var i=0; i<maxPuntos; i++) {
        puntos[i] = new Punto(random(0, width) - width/2,
                              random(0, height) - height/2);
        tam = width/2;
        neurona = new Neurona(2, .01);
    }
}

const m = 2; //Pendiente de inclinación para recta

function draw() {
    background(60);
    pintarEjes();
    strokeWeight(2.5);

    line(width/2 - width/m, 0, width/2 + width/m, height);

    
    for(var i = 0; i<puntos.length; i++) {
        puntos[i].x = random(0, width);
        puntos[i].y = random(0, height);
    }
    

    for(var i = 0; i < puntos.length; i++) {
        //var value = neurona.clasificar(puntos[i].x/tam, puntos[i].y/tam);
        //console.log("iteración " + i + ", valor" + value)
        puntos[i].setTipo( neurona.clasificar(puntos[i].x/tam, puntos[i].y/tam) );
        puntos[i].pintar();
    }

    var x = random(0, width) - width/2;
    var y = random(0, height) - height/2;

    neurona.entrenar(x, y, y < m*x ? 1 : -1);
}

function pintarEjes() {
    strokeWeight(1.5);
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);
}
  