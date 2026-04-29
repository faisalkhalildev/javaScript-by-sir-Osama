let str = "This is the World War II started in 1945"

for (let i = 0; i < str.length; i++) {
    if (str.slice(i,i+12) === 'World War II') {
        str = str.slice(0,i) + "second world war" + str.slice(i + 12)
    }
}

console.log(str);
