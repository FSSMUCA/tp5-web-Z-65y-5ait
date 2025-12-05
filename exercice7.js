function verifierMotDePasse(mdp)
{
    i = 0
    flag = 0
    while (mdp[i])
    {
        if (mdp[i] == '@')
            flag = 1
        i++
    }
    if (flag && (i >= 8))
        return (true)
    return (false)
}

let mdp = prompt("Entrez un mot de passe: ")

if (verifierMotDePasse(mdp))
    console.log("Mot de passe valide")
else
    console.log("Mot de passe non valide")