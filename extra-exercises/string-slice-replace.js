let text = "This is the World War II started in 1945"

for (var i = 0 ; i < text.length; i++)
{
    if (text.slice(i , i + 12)    ===   "World War II")
    {
        text = text.slice(0 , i) + "the second world war " + text.slice(i +12);
    }
}
console.log(text);
