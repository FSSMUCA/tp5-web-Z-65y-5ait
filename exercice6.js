i = 1
sum_p = 0
sum_imp = 0
while (i <= 50)
{
    if (i % 2 == 0)
        sum_p += i
    else
        sum_imp += i
    i++;
}

console.log("Somme impaire :" + sum_imp)
console.log("Somme paire :" + sum_p)