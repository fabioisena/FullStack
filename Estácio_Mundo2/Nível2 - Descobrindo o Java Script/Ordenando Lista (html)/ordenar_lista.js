var campo = document.getElementById('valor')
var but = document.querySelector("button")
var conjunto = [];
var i = 0
var listagem = document.getElementById('mostrar')
var algOrdenar = document.getElementById('modo_sort');


but.onclick = function(){
    conjunto.push(campo.value);
    add();
}

add = () => {
    var novoItem = document.createElement('li'); 
    novoItem.innerHTML = conjunto[i];
    //add um novo item!
    listagem.appendChild(novoItem);
    valor.value = null;
    i += 1
}
//------------------------------ ORDENAR ----------------------------------
ordenar = () =>{
    vetor = conjunto;
        switch (algOrdenar.value){
            case 'Bubble Sort':
                Bubble_Sort();
                break;
            case 'Selection Sort':
                Selection_Sort();
                break;
            case 'Quick Sort':
                Quick_Sort();
                break;
            
        }    
}


    //--------------------------FONTES DA ORDENAÇÃO---------------------------------
    // https://www.freecodecamp.org/portuguese/news/algoritmos-de-ordenacao-explicados-com-exemplos-em-python-java-e-c/
    // https://www.mundojs.com.br/2018/02/05/algoritmos-de-ordenacao/
    //https://stackoverflow.com/questions/5185864/javascript-quicksort

    /* https//stackoverflow.com/questions/37817334/javascript-bubble-sort         
    ---------- OPÇÃO PARA ESTUDAR !!! ---------  */

//----------------------------isertion sort---------------------
insertion_sort = () => {
    let n = vetor.length;
    for (let i=1; i<n; ++i)
    {
        let key = vetor[i];
        let j = i-1;
        //Move os elementos do vetor que são maiores que a chave para uma posição a frente 
        while (j>=0 && vetor[j] > key)
        {
            vetor[j+1] = vetor[j];
            j = j-1;
        }
        vetor[j+1] = key;
    }
    // console.log(vetor);
    // imprimir_vetor()
    gerar()
}

gerar = () => {
    mostrar.innerHTML = '';
    let lista = document.getElementById('mostrar');
    for(var i = 0; i < conjunto.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(conjunto[i]));
        lista.appendChild(item);
    }
}

//---------------------------shuffle----------------------------
misturar = () => {
    let shuffled = conjunto.sort(() => Math.random() - 0.5);
    // console.log(shuffled);
    gerar();
}
//---------------------------bubble_sort----------------------------
Bubble_Sort = () => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++)
      for (let j = 0; j < n - i - 1; j++)
        if (vetor[j] > vetor[j + 1]) {
          // troca temp and vetor[i]
          let temp = vetor[j];
          vetor[j] = vetor[j + 1];
          vetor[j + 1] = temp;
        }
    // console.log(vetor);
    gerar()
  }
//---------------------------selection_sort----------------------------
Selection_Sort = () => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
      //Encontra o menor item da parte não ordenada
      let min_idx = i;
      for (let j = i + 1; j < n; j++)
        if (vetor[j] < vetor[min_idx])
          min_idx = j;
      //Troca o menor com o primeiro elemento
      let temp = vetor[min_idx];
      vetor[min_idx] = vetor[i];
      vetor[i] = temp;
    }
    // console.log(vetor)
    gerar()
  }

//---------------------------swap--------------------
swap = (items, leftIndex, rightIndex) => {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
//--------------------------quick_sort------------------------------

Quick_Sort = () =>{// first call to quick sort
    var items = conjunto;
    var sortedArray = qS(items, 0, items.length - 1);
    // console.log(sortedArray); //prints [2,3,5,6,7,9]
    gerar();
}

qS = (items, left, right) => {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            qS(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            qS(items, index, right);
        }
    }
    return items;
}

//------------------------particionamento-------------------------
partition = (items, left, right) => {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

