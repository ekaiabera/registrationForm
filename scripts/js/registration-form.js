//////////////show and hide checklist dropdown/////////////
const lists = document.querySelector('.lists')
document.querySelector('.selectField').addEventListener('click', () => {
  
    lists.classList.contains('hide')?lists.classList.remove('hide'):lists.classList.add('hide')

});


const outputContainer = document.querySelector('.outputContainer')

function getInputs(){


let person = {
    title : document.getElementById('title').value, 
    name : document.getElementById('name').value,
    birthdate: document.getElementById('birthdate').value,
    gender: document.getElementById('gender').value, 
    age: document.getElementById('age').value, 
    description: document.getElementById('description').value

};

let outputArray = []
    
    const sports = document.getElementById('sports');
    const cooking = document.getElementById('cooking')
    const reading = document.getElementById('reading')
    const watchingShows = document.getElementById('watchingShows')
    const gardening = document.getElementById('gardening')
    const socialDrinking = document.getElementById('socialDrinking')
    const playingGames = document.getElementById('playingGames')
    const others = document.getElementById('others')



if (person.title != "" && person.name != "" &&  person.birthdate != "" &&  person.gender != "" &&  person.age != ""  &&  person.hobbies != "" &&  person.description != ""  ){
    outputArray = []
    if(sports.checked == true){
        outputArray.push("Sports ")
    }
    if(cooking.checked == true){
        outputArray.push("Cooking ")
    }
    if(reading.checked == true){
        outputArray.push("Reading ")
    }
    if(watchingShows.checked == true){
        outputArray.push("Watching Shows ")
    }
    if(gardening.checked == true){
        outputArray.push("Gardening ")
    }
    if(socialDrinking.checked == true){
        outputArray.push("Social Drinking ")
    }
    if(playingGames.checked == true){
        outputArray.push("Playing Games ")
    }
    outputArray.push(others.value)
    console.log(outputArray)

    
    outputContainer.style.display ="block"
  
// document.write(person.title + ' ' + person.name + ' ' + person.birthdate + ' ' + person.gender + ' ' + person.age + outputArray + person.description);
// document.writeln(person.description)
displayInfo.innerHTML =  '<h3>Registration Details:</h3><br> Name: <b>' + person.title + ' '  + person.name + '</b> <br>Birthdate: <b>' + person.birthdate + '</b><br>Gender: <b>' + person.gender + '</b><br>Age: <b> ' + person.age  + '</b><br>Hobbies: <b>' + outputArray  + '</b><br>Description: <b> ' + person.description + '</b>';

}

else{
    alert("Please complete the form!")
}
}

function clearForm(){
    outputContainer.style.display ="none"
}
