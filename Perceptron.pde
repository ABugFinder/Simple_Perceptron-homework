
Punto[] puntos = new Punto[2000];
Neurona neurona;
float m = 0.2, b = 0, tam;

void setup() {
  size(600,600);
  
  for(int i=0; i<puntos.length; i++) {
    puntos[i] = new Punto(random(0, width) - width/2,
                          random(0, height) - height/2);
    tam = width/2;
    
    neurona = new Neurona(2, .05);
  }
  println(frameCount);
}

void draw() {
  background(60);
  ejes();
  strokeWeight(1);
  line(width/2 - width/m, 0, width/2 + width/m, height);
  
  for(int i = 0; i<puntos.length; i++) {
    puntos[i].x = random(0, width)-width/2;
    puntos[i].y = random(0, height)-height/2;
  }
  
  for( Punto p : puntos) {
    p.tipo = int(neurona.clasificar(p.x/tam, p.y/tam));
    p.pintar();
  }
  
  float x = random(0, width) - width/2;
  float y = random(0, height) - height/2;
  
  neurona.entrenar(x, y, y < m*x+b ? 1 : -1);
  
  delay(100);
  //if( frameCount >5)
  //noLoop();
  
}
  
void ejes() {
  strokeWeight(2);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
}
