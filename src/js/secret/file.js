export default function makePalindrome (input) {
  console.log(input, '');
  let output = input.split('').reverse().join('');
  return output;
}
