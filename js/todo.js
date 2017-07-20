$(document).ready(function(){
  // call functions here

submitForm()

});

// define functions here

function submitForm(){
  $('form').on('submit', function(event){

    debugger
    var item = $('#item').val()
    newElem = document.createElement('li')
    newText  = document.createTextNode(`${item}`)
    newElem.appendChild(newText)
    $('ol')[0].appendChild(newElem)

    event.preventDefault()

  })
}
