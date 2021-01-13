// exo1
let calcul = (a,b) => {
    return `${a} + ${b} = ${a+b} `
}

console.log(calcul(5,8));

console.log("_____");
// exo2
let sous = (a,b) => {
    return `${a} - ${b} = ${a-b} `
}

console.log(sous(9,5));

console.log("_____");
// exo3
let multi = (a,b) => {
    return `${a} * ${b} = ${a*b} `
}

console.log(multi(9,5));

console.log("_____");
// exo4
let div = (a,b) => {
    return `${a} / ${b} = ${a/b} `
}

console.log(div(10,5));

console.log("_____");
// exo5
let modulo = (a,b) => {
    return `${a} % ${b} = ${a%b} `
}

console.log(modulo(10,5));

console.log("_____");
// exo6
let racine = (a) => {
    let resultat = a * a;
    return `la racine carrée de ${a} est ${resultat} `
}

console.log(racine(3));

console.log("_____");
// exo7
let exposant = (a,b) => {
    return `${a} exposant de ${b} = ${Math.pow(a, b)} `
}

console.log(exposant(4,2));

console.log("_____");
// exo8
let capitalize = (a) => {
    return `${a.charAt(0).toUpperCase() + a.slice(1) .toLowerCase()}`
}
console.log(capitalize("je vais Aller Me promenEr"));

console.log("_____");
// exo9
let calcul2 = (nb1,op,nb2) => {
    switch (op) {
        case "+":
        return `${nb1} + ${nb2} = ${nb1+nb2}`;
        
        case "-":
        return `${nb1} - ${nb2} = ${nb1-nb2}`;
        
        case "/":
        return `${nb1} / ${nb2} = ${nb1/nb2}`;
        
        case "*":
        return `${nb1} * ${nb2} = ${nb1*nb2}`;
        
        default:
            return `erreur`
    }
}

let operation = calcul2(2,"*",3);

console.log(operation);