
class Punto {
  float x, y;
  int tipo;
  
  Punto(float _x, float _y) {
    x = _x;
    y = _y;
    tipo = 1;
  }
  
  void pintar() {
    strokeWeight(0);
    if(tipo == 0) {
      fill(255,0,0);
    }
    else {
      fill(0,255,0);
    }
    ellipse(x+width/2, y+height/2, 5, 5);
  }
  
  
}
