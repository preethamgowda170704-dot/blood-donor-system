let donors = JSON.parse(localStorage.getItem("donors")) || [];

document.getElementById("donorForm")?.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let blood = document.getElementById("blood").value;
let city = document.getElementById("city").value;

let donor = {name,age,blood,city};

donors.push(donor);

localStorage.setItem("donors", JSON.stringify(donors));

alert("Donor Registered Successfully");

this.reset();

});

function searchDonor(){

let blood = document.getElementById("searchBlood").value;

let result = donors.filter(d => d.blood === blood);

let output="";

result.forEach(d=>{
output += `<p>${d.name} - ${d.city} - ${d.blood}</p>`;
});

document.getElementById("result").innerHTML = output || "No donor found";

}
