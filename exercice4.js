let min = Number(prompt("Entrez le nombre minimal : "))
let max = Number(prompt("Entrez le nombre maximal : "))

while (min <= max)
{
    if (min % 3 == 0 && min % 5 == 0)
        console.log("Five&Three")
    else if (min % 3 == 0)
        console.log("Three")
    else if (min % 5 == 0)
        console.log("Five")
    else
        console.log(min)
    min++
}