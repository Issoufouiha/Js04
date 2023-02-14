function checkSign(nombre) {
    if (nombre < 0) {
      return "Negatif";
    } else {
      return "Positif";
    }
  }
  console.log(checkSign(-4));
console.log(checkSign(7));
console.log(checkSign(0)); 


module.exports= checkSign
