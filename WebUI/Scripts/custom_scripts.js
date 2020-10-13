document.getElementById("mathBtn").addEventListener("click", function () {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);
    const num4 = parseInt(document.getElementById("num4").value);
    const numK = parseInt(document.getElementById("numK").value);
    const fearArray = [num1, num2, num3, num4, numK];
    const output = document.getElementById("output");
    output.innerHTML = "";

    for (let i = 0; i < fearArray.length - 1; i++) {
        for (let j = i + 1; j < fearArray.length - 1; j++) {
            if (fearArray[i] + fearArray[j] === numK) {
                output.innerHTML = `${fearArray[i]} and ${
                    fearArray[j]
                } are two numbers in our array that add up to ${numK}!`;
                return;
            }
        }
    }

    if (
        isNaN(num1) ||
        isNaN(num2) ||
        isNaN(num3) ||
        isNaN(num4) ||
        isNaN(numK)
    ) {
        output.innerHTML = "";
    } else {
        output.innerHTML = `There are no two numbers in our array that add up to ${numK}!`;
    }
});