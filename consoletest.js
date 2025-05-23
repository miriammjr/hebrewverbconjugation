// import "/paal/paal-shlemim-efol.js";

const test1 = new PaalShlemimEfol("ר", "ג", "ס");
const curr = document.getElementById("all");

console.log(test1.presentMascSing());
console.log(test1.presentFemPlural());
console.log(test1.presetFemSing());
console.log(test1.presentMascPlural());

curr.innerHTML = `<p>${test1.presentMascSing()}</p>`;
