
function Neurona(n, tasa) {
    var alfa; // Tasa de aprendizaje
    var peso0 = 0.5;
    var peso1 = 0.5;
    var peso2 = 0.5;

    var pesos = [peso0, peso1, peso2];
    var tasa;
    this.alfa = tasa;

    /*Neurona(n, tasa) {
      pesos = new float[n+1];
      pesos[0] = 0.5;
      pesos[1] = 0.5;
      pesos[2] = 0.5;
      alfa = tasa;
    }*/
    
    this.clasificar = function(x, y) {
      var suma = x*pesos[0] + y*pesos[1] + pesos[2];
      return this.f(suma);
    }
    
    this.f = function(suma) {
      /*if(suma <= 0) return 1; else return -1;*/
      //suma = (suma <= 0) ? 1: -1;
      // float euler = 2.7182817; exp(x) = euler a la potencia x
      
      return 1/(1 + exp(-suma));
    }  
    
    /*
      Para cada punto x,y se tiene el resultado correcto
      los pesos se actualizan considerando el error de la clasificación
    */
    this.entrenar = function (x, y, correcto) {
      var eval = this.clasificar(x,y);
      var error = correcto - eval;
      pesos[0] = pesos[0] + alfa*error*x;
      pesos[1] = pesos[1] + alfa*error*y;
      pesos[2] = pesos[2] + alfa*error;
    }
    
}
  