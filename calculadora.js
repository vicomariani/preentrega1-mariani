function sumar(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
  }
  
  function restar(valor1, valor2) {
    const resultado = valor1 - valor2;
    return resultado;
  }
  
  function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
  }
  
  function dividir(valor1, valor2) {
    const resultado = valor1 / valor2;
    return resultado;
  }
  
  function calculadora() { 
    let nombre = prompt("Ingrese su nombre")
    let operacion;  
  
    while (operacion != "x" && operacion != "salir") {
      operacion = prompt("Ingrese la operación que desea realizar:\n Sumar (+)\n Restar (-)\n Multiplicar (*)\n Dividir (/)\n Salir (x)\n");
      operacion = operacion.toLowerCase()
  
      let valor1;
      let valor2;
      
      switch (operacion) {
          case "+":
            valor1 = parseInt(prompt("Ingrese 1° valor"));
            valor2 = parseInt(prompt("Ingrese 2° valor"));  
            alert("El resultado de la suma es  " + sumar(valor1, valor2));
            break;    
          case "-":
            valor1 = parseInt(prompt("Ingrese 1° valor"));
            valor2 = parseInt(prompt("Ingrese 2° valor"));   
            alert("El resultado de la resta es " + restar(valor1, valor2));
            break;        
          case "*":
            valor1 = parseInt(prompt("Ingrese 1° valor"));
            valor2 = parseInt(prompt("Ingrese 2° valor")); 
            alert("El resultado de la multiplicación es " + multiplicar(valor1, valor2));
            break;        
          case "/":
            valor1 = parseInt(prompt("Ingrese 1° valor"));
            valor2 = parseInt(prompt("Ingrese 2° valor")); 
            alert("El resultado de la división es " + dividir(valor1, valor2));
            break;
          case "x":
            alert("Muchas Gracias " + nombre + " por utilizar nuestra calculadora!")
            break; 
          case "salir":
            alert("Muchas Gracias " + nombre + " por utilizar nuestra calculadora!")
            break;      
          default:
            alert("La operación ingresada es inválida");
      }
    }     
  }