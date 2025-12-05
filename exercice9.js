function factorielle(n)
{
    if (n == 0)
        return (1)
    else
        return(n * factorielle(n - 1))
}

n = Number(prompt("Entrez un nombre: "))

console.log(factorielle(n))