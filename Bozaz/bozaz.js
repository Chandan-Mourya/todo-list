document.querySelector("form").addEventListener("submit", submitFunction)

function submitFunction(){
    event.preventDefault();
    

   let cat=document.getElementById("category").value;
   let name=document.querySelector("#name").value;
   let price=document.querySelector("#price").value;

   let tr=document.createElement("tr")
   
   let td1=document.createElement("td")
   td1.innerText=cat;
   let td2=document.createElement("td")
   td2.innerText=name;
   let td3=document.createElement("td")
   td3.innerText=price;



   tr.append(td1,td2,td3)
   document.querySelector("tbody").append(tr)
}