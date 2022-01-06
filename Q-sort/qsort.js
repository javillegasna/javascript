
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function createRArray(size = 10, min=0, max=100){
    const testAray =[]
    for (let index = 0; index <=size; index++) {
        testAray.push(getRndInteger(min,max));
    }
    return testAray;
};
function getPivot(left,right){
    return Math.floor((left+right)/2)
}
//hoare Partición
function partition(arr, left, right) {
    const pivot = arr[getPivot(left,right)];
    while (left <= right) {//hay que considerar que si llegan a ser iguales se va una iteracion más y los puenteros se llegan a ser diferentes
      while (arr[left] < pivot) {
        left++;
      }
  
      while (arr[right] > pivot) {
        right--;
      }
      if (left <= right) {
        [arr[left],arr[right]]=[arr[right],arr[left]]//cambio con asignacion multiple
        left++;//una vez realizado el cambio se continua al sigiente elemnto
        right--;  
      }
    }
    return left;//el pivote tambien cambia de ligar y es necesario actualizar el index de ese pivote
  }
function quicksort(arr,indexL=0,indexR=undefined){//valores por defecto para no declarlos en la primera llamada
    if(indexR==undefined)indexR=arr.length-1;
    if (indexL<indexR){
        const indexP=partition(arr,indexL,indexR);
        quicksort(arr,indexL,indexP-1);//seccion Izquierda
        quicksort(arr,indexP,indexR);//seccion Derecha
    }
    return arr;
}

let arr=createRArray();
console.log(`Desordenado: ${arr}`);
quicksort(arr);
console.log(`Ordenado: ${arr}`);
//nota solo es necesario ejecutar y se creara un arreglo desordenado con números repetidos;