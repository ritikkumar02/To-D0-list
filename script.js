
const inputdata = document.getElementById("inputdata");

const textarea = document.querySelector("textarea");

const table = document.querySelector("tbody");

document.getElementById("submitdata").addEventListener("click", () => {
    console.log(inputdata.value);
    console.log(textarea.value);

    document.querySelector(".grid-2").style.display = "block";

    // create tr
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = inputdata.value;
    const td2 = document.createElement("td");
    td2.innerText = textarea.value;
    const td3 = document.createElement("td");
    td3.className = "delete-btn";
    td3.innerHTML = '<i class="fa-solid fa-trash"></i>';

    td3.onclick = (e) => {
        const clickedelement = e.target;
        console.log(clickedelement)
        clickedelement.parentNode.parentNode.remove();
    }

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(tr);

    inputdata.value = "";
    textarea.value = "";







})



