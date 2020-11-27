// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/


window.addEventListener("load", function() {
   let form = document.getElementById("formSubmit");


   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
      let data = document.getElementById("missionTarget")
      data.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}"></img>`

      });
   });



   form.addEventListener("click", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]")
      let copilotName = document.querySelector("input[name=copilotName]")
      let fuelLevel = document.querySelector("input[name=fuelLevel]")
      let cargoMass = document.querySelector("input[name=cargoMass]")
      let launchStatus = document.getElementById("launchStatus")

      let pilotStatus = document.getElementById("pilotStatus")
      let copilotStatus = document.getElementById("copilotStatus")
      let fuelStatus = document.getElementById("fuelStatus")
      let cargoStatus = document.getElementById("cargoStatus")

      let pilotReady = false;
      let copilotReady = false;      
      let fuelReady = false;     
      let cargoReady = false;

 

      if (isNaN(pilotName.value) === false && pilotName.value !== "") {
         alert("letters only for pilot name!")
         launchStatus.innerHTML = `Shuttle not ready for launch`
         launchStatus.style.color = "red"
         pilotStatus.innerHTML = `${pilotName.value} is not ready for launch`
         pilotStatus.style.visibility = "visible"
         event.preventDefault();
      } else if (isNaN(pilotName.value) === true) {
         pilotStatus.innerHTML = `${pilotName.value} is ready for launch`
         pilotStatus.style.visibility = "visible"
         pilotReady = true;
      }

      if (isNaN(copilotName.value) === false && copilotName.value !== "") {
         alert("letters only for copilot names!")
         launchStatus.innerHTML = `Shuttle not ready for launch`
         launchStatus.style.color = "red"
         copilotStatus.innerHTML = `${copilotName.value} is not ready for launch`
         copilotStatus.style.visibility = "visible"
         event.preventDefault();
      } else if (isNaN(copilotName.value) === true) {
         copilotStatus.innerHTML = `${copilotName.value} is ready for launch`
         copilotStatus.style.visibility = "visible"
         copilotReady = true;
      }

      if (isNaN(fuelLevel.value) === true) {
         alert("numers only for fuel level")
         launchStatus.innerHTML = `Shuttle not ready for launch`
         launchStatus.style.color = "red"
         fuelStatus.innerHTML = `Fuel level is not valid`
         fuelStatus.style.visibility = "visible"  
         event.preventDefault();
      }  else if (fuelLevel.value < 10000) {
         launchStatus.innerHTML = `Shuttle not ready for launch`
         launchStatus.style.color = "red"
         fuelStatus.innerHTML = `Fuel level is too low to launch`
         fuelStatus.style.visibility = "visible"      
         event.preventDefault(); 
      } else {
         fuelStatus.innerHTML = `Fuel level is good for launch`
         fuelStatus.style.visibility = "visible"   
         fuelReady = true;
      }

      if (isNaN(cargoMass.value) === true) {
         alert("numers only for cargo mass!")
         launchStatus.innerHTML = `Shuttle not ready for launch`
         launchStatus.style.color = "red"
         cargoStatus.innerHTML = `Cargo mass is not valid`
         cargoStatus.style.visibility = "visible"  
         event.preventDefault();
      } else if (cargoMass.value > 10000) {
         launchStatus.innerHTML = `Shuttle not ready for launch`
         launchStatus.style.color = "red"
         cargoStatus.innerHTML = `Cargo mass is too high to launch`
         cargoStatus.style.visibility = "visible"      
         event.preventDefault();
      } else {
         cargoStatus.style.visibility = "visible"   
         cargoStatus.innerHTML = `Cargo mass is good for launch`
         cargoReady = true;
      }

      if (pilotReady === true && copilotReady === true && fuelReady === true && cargoReady === true) {
         launchStatus.innerHTML = `Shuttle is ready for launch`
         launchStatus.style.color = "green"
      }

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("Please enter a value for all fields");   
         cargoStatus.style.visibility = "hidden"   
         fuelStatus.style.visibility = "hidden"   
         event.preventDefault();
      }


   })
})