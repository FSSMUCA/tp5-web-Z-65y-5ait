function sommeIterative(n)
{
    i = 1
    sum = 0
    while (i <= n)
    {
        sum += i
        i++
    }
    return (sum)
}

function sommeRecursive(n)
{
    if (n == 0)
        return (0)
    return (n + sommeRecursive(n - 1))
}

n = Number(prompt("Entrez un nombre: "))

console.log("Somme iteratif: " + sommeIterative(n))
console.log("Somme recursif: " + sommeRecursive(n))