let string = 'yure matias';

for(let i = 0, char = string[i]; i < string.length; i++, char = string[i]) {
  console.log(char);
}