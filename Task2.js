function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
}
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)

  function openForm() {
    document.getElementById("my_form").style.display = "block";
}

function closeForm() {
    document.getElementById("my_form").style.display = "none";
}

function checkForm(){
    let answer = document.getElementById('code').value;
    if(answer != 1345679){
         alert('Answer is incorrect, please try again..');
    } else {
		     alert('Good job, that\'s the correct answer');
             location.replace("https://www.w3schools.com")

		}
}