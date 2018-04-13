//define functions here

  function getIt() {
  $('p').on("click", function() {
    alert("Hey")
    })
  }
  
  function frameIt() {
    $("img").on("load", function() {
      $("img").addClass("tasty")
    })
  }
  
  function pressIt() {
    $('input').on("keydown", function(g) {
      const key = parseInt(g.which || g.detail)
        if (key === 71) {
          alert('g was pressed')
        } 
    })
  }
  
  function submitIt() {
    $("form").on("submit", function() {
      alert("Your form is going to be submitted now.")
    })
  }
  
$(document).ready(function() {
  getIt()
  
  pressIt()
  
  submitIt()
  
  frameIt()
}) 
