  const scriptURL = 'https://script.google.com/macros/s/AKfycbyWBH0FG3sY2DSoiYhl6Na5eG8kTdjqI5qhbow-hWyEXvgEdecSVI6-_0OBCA0tLyF1rg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("response")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent!!"
        setTimeout(function(){
          msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
