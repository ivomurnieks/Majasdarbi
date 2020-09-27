setInterval(() => {
  let d = new Date()
  hours = d.getHours()
  minutes = d.getMinutes()
  let seconds = d.getSeconds()
  let out = `${a(hours)}:${a(minutes)}:${a(seconds)}`
  const el = document.getElementById('user')
  el.innerHTML = out
  }, 1000);
  
  function a(b){
    return b < 10 ? `0${b}` : b
  }