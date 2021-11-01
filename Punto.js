function Punto(x, y) {
    var tipo;

    this.x = x + width/2;
    this.y = y + height/2;
    this.r = 5;
    
    this.pintar = function () {
      strokeWeight(0);
      if(tipo >= 0) {
        fill(255,0,0);
      }
      else {
        fill(0,255,0);
      }
      ellipse(this.x, this.y, this.r*2);
    }

    this.setTipo = function (newTipo){
        tipo = newTipo;
    }
    
}
  