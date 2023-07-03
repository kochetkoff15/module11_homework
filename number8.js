let nouns = new Map([
    ["house", "big"],
    ["dog", "fluffy"],
    ["Olga", "human"]
]);
nouns.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});