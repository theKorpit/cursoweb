var a = [5, 6 ,4, 2, 1, 3];
console.log(`Arranjo inicial [${a}]`)
function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length; i++) {
            console.log("-----------------------------")
            console.log(`A posição atual no arranjo é ${i}`)
            console.log(`Valor → ${a[i]}`)
            console.log("-----------------------------")
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
                
                //console.log(`${a}`)
                
            }
        }
    } while (swapped);
}

bubbleSort(a);
console.log(`Arranjo final [${a}]`)