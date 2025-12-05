total = Number(prompt("Entrez un total HR: "))
remise = Number(prompt("Entrez une remise en %: "))

function totalAvecRemise(total, remise)
{
    return (total - (total * remise / 100))
}

totalFinal = totalAvecRemise(total, remise)

console.log(totalFinal)