
class Neurona {
  float[] pesos;
  float alfa; // Tasa de aprendizaje
  
  Neurona(int n, float tasa) {
    pesos = new float[n+1];
    pesos[0] = 0.5;
    pesos[1] = 0.5;
    pesos[2] = 0.5;
    alfa = tasa;
  }
  
  float clasificar(float x, float y) {
    float suma = 0;
    suma += x*pesos[0] + y*pesos[1] + pesos[2];
    return f(suma);
  }
  
  float f(float suma) {
    /*if(suma <= 0) return 1; else return -1;*/
    //suma = (suma <= 0) ? 1: -1; 
    // float euler = 2.7182817; exp(x) = euler a la potencia x  
    
    return 1/(1 + exp(-suma));
  }  
  
  /*
    Para cada punto x,y se tiene el resultado correcto
    los pesos se actualizan considerando el error de la clasificación
  */
  void entrenar (float x, float y, int correcto) {
    float eval = clasificar(x,y);
    float error = correcto - eval;
    pesos[0] = pesos[0] + alfa*error*x;
    pesos[1] = pesos[1] + alfa*error*y;
    pesos[2] = pesos[2] + alfa*error;
  }
  
}
