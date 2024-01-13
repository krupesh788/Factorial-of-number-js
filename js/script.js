
function fact()

{

    let num = parseInt(document.getElementById("num").value);

    let factorial = 1;
    for(let i=1;i<=num;i++)
    {

        factorial *= i;
    }

    document.getElementById("result").innerHTML = "The factorail of " + num + " is: " + factorial;
}