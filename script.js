let section = document.querySelector(".section");
const btn = document.getElementById("btn");
let colorCode = document.getElementById("color-code");
let copy = document.getElementById("copyIcon");

//using rgb color code

// btn.addEventListener("click", (e) => {
//   let R = Math.ceil(Math.random() * 256);
//   let G = Math.ceil(Math.random() * 256);
//   let B = Math.ceil(Math.random() * 256);
//   colorCode.innerText = `rgb(${R},${G},${B})`;
//   section.style.backgroundColor = `rgb(${R},${G},${B})`;
// });
// -------------------------------------------------------------------------------------

/// using hexadecimal color code

// 16777215 - use this number to multiply
let hexadecimal = "#fff";
btn.addEventListener("click", (e) => {
  let rNubmer = Math.floor(Math.random() * 16777215);
  hexadecimal = "#" + rNubmer.toString(16);
  //    argument 16 (unite) will convert number to hexadecimal insted of string

  colorCode.innerText = hexadecimal;
  section.style.backgroundColor = hexadecimal;
});

// for coping a color code
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(hexadecimal);
  console.log(hexadecimal);
});
