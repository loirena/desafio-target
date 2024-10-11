function contarA(string) {
    let regex = /a/gi;
    let matches = string.match(regex);
    
    if (matches) {
        console.log(`A letra 'a' aparece ${matches.length} vezes na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

// String definida previamente
let minhaString = "lorena";

contarA(minhaString);
