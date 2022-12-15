const trisides=document.querySelectorAll("#tri-side");
const Checkbtn=document.querySelector("#calculate");
const outputDiv=document.querySelector("#output");

Checkbtn.addEventListener("click",calculateFunc);



function calculateFunc () {
if (((Number(trisides[0].value) + Number(trisides[1].value)) > (Number(trisides[2].value))) && 
(((Number(trisides[1].value)) + (Number(trisides[2].value))) > (Number(trisides[0].value))) && 
(((Number(trisides[0].value)) + (Number(trisides[2].value))) > (Number(trisides[1].value)))){
        const area = sumOfSides();
        var semipri = (area/2);
        var finalValue = semipri*(semipri-Number(trisides[0].value))*(semipri-Number(trisides[1].value))*(semipri-Number(trisides[2].value));

        outputDiv.innerText="The area of the triangle is "+String(finalValue**(0.5));

    } else {
        outputDiv.innerText = "Enter valid side lengths such that each side lengths"
    }
}
function sumOfSides(){
    return Number(trisides[0].value) + Number(trisides[1].value) + Number(trisides[2].value);
}