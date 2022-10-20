// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){cats.push('Ralph');}
function destructivelyPrependCat(){cats.unshift('Bob');}
function destructivelyRemoveLastCat(){cats.pop('Ralph');}
function destructivelyRemoveFirstCat(){cats.shift('Bob');}
function appendCat (){const copyofCats=[...cats,"Broom"];return copyofCats}
function prependCat (){const copyofCats =["Arnold", ...cats];return copyofCats}

function removeLastCat(){let copyofCats =cats.slice(0,2); return copyofCats;}
function removeFirstCat(){let copyofCats =cats.slice(1); return copyofCats;}







