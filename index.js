function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Déplacez les éléments de arr[0..i-1], qui sont plus grands que key,
    // d'une position vers la droite pour faire de la place pour l'élément key
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Testez la fonction

// Exemple d'utilisation
let arr = [12, 11, 13, 5, 6];
console.log("arr trié : " + insertionSort(arr));
