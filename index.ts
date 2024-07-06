import * as readline from "readline";

function textToBinary(text: string): string {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введи текст: ", (input) => {
  const binary = textToBinary(input);
  console.log(`Двоичный код: ${binary}`);
  rl.close();
});
