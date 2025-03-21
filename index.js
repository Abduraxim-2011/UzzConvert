let select1 = document.getElementById("select1")
let select2 = document.getElementById("select2")
let input1 = document.getElementById("input1")
let result = document.getElementById("result")
let p = document.getElementById("p")

function convert() {
    
    let value1 = select1.value;
    let value2 = select2.value;
    let inp = input1.value;

    const url = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${value1}&to=${value2}&amount=${inp}`;
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "59e1d3f149msh6eacef9f2ae8638p1edfa4jsn02b0983fcb76",
            "x-rapidapi-host": "currency-converter-pro1.p.rapidapi.com",
        },
    };

    fetch(url, options)
        .then((response) => response.json())
        .then((response) => {

            result.innerText = `${inp} ${value1} = ${new Intl.NumberFormat().format(response.result)} ${value2}`

        })
}

