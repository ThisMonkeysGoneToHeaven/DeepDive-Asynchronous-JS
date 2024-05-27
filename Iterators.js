const horcruxes = [
  "Diary",
  "Ring",
  "Locket",
  "Cup",
  "Diadem",
  "Serpent",
  "Boy",
];

// this is the iterator object that allows the for .. of loop to work
const iterator = horcruxes[Symbol.iterator]();
console.log(iterator);

for (const horcrux of horcruxes) {
  console.log(horcrux.toUpperCase());
}
