const special_chars   = ["!", "#" ,"$" ,"%" ,"&" ,", "*", "+", ", "-", ":", ";", "<", "=", ">", "?", "@" ," ^ " ,"_" ,"`" ,"~"]
let indicator_element = document.getElementsByClassName('validator-indicator');

function getUserInput(psswd_element) {
  validatePassword(psswd_element.value)
}

function validatePassword(password){
  let charValidation   = validateChar(password)
  let numberValidation = validateNumber(password)
  let lengthValidation = validateLength(password)

  if (charValidation && numberValidation && lengthValidation) {
    indicator_element[0].style.backgroundColor = "green";
  } else {
    indicator_element[0].style.backgroundColor = "red";
  }
}

function validateChar(password){
  const charMatch = c => R.contains(c, special_chars)
  return R.any(charMatch)(R.split('', password))
}

function validateNumber(password){
  const checkTypeInt = c => (!isNaN(Number(c)))
  return R.any(checkTypeInt)(R.split('', password))
}

function validateLength(password){
  return (R.length(password) >= 10)
}
