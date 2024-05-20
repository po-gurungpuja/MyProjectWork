const count = document.getElementById("count");
incVisitors();
function incVisitors(){
    let visits;

    if(!localStorage.getItem("visits"))
        {
            localStorage.setItem("visits", 1);
        }
    else{
        visits = Number(localStorage.getItem("visits"));
        const newValue = visits + 1;
        localStorage.setItem("visits", newValue);
        count.innerText = localStorage.getItem("visits");
    }
}