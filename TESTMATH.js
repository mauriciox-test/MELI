function add(x1,x2) {
    return x1 + x2;
    }
function substract (x1,x2) {
    return x1 - x2;
    }
function divide(x1,x2){
    if(x2==0){
        console.log('error error no se puede dividir entre 0')
    }else {
        return x1 / x2;
    }
    }
    
    exports.add = add;
