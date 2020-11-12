const checkAge = (name, age) => {
  // your code here
  if (age < 21){
      return `Go home, ${name}!`;
  }
  else if (age >= 21){
      return `Welcome, ${name}!`;
  }
}
console.log(checkAge('Adrian',13))