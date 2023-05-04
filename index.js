const spellsPotions = (spells, potions, max) => {
    let result = [];
    let output = [];
    let occurence = 0;
    for (let potion of potions) {
        for (let spell of spells) {
            let multiplied = spell * potion;
           result.push( (multiplied > 7) ? occurence++ : 0);
      }
    
    }
    return result;
};
console.log(spellsPotions([5, 1, 3], [1, 2, 3, 4, 5]),7);