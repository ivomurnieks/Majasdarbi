function insert(val){
  if(document.form.textview.value === '0' && !(val === "+" || val === "-" || val === "*" || val === "/")){
    document.form.textview.value = val
  } else {
    document.form.textview.value = document.form.textview.value + val
  }
}

function clean(){
  document.form.textview.value = '0'
}

function back(){
  var exp = document.form.textview.value
  if (exp.length > 1){
  document.form.textview.value = exp.substring(0, exp.length - 1)
  } else {
    document.form.textview.value = '0'
  }
}

function equal(){
  var exp = document.form.textview.value
  if (exp){
    try{
      document.form.textview.value = eval(exp)
    }
    catch(err) {
      document.form.textview.value = 'Err'
      console.log(err)
    }
  }
}