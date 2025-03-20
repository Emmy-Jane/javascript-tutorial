// function task 1
function tellFortune(numChildren, partnerName, geographicLocation, jobTitle) {
  console.log(
    `you will be a ${numChildren} in ${partnerName} and married to ${geographicLocation} and with ${jobTitle} kids.`
  );
}
tellFortune("chef", "australlia", "kelvin", 6);
tellFortune("teacher", "china", "aura", 5);
tellFortune("coach", "spain", "dabby", 4);
tellFortune("artist", "kongo", "elvis", 3);

// function task 2
function calculateDogAge(puppyAge) {
  const calculateDogAge = puppyAge * 7;
  console.log(`my doggie is $(calculateDogAge) years old`);
}
calculateDogAge(5);
calculateDogAge(3);
calculateDogAge(4);

// function task 3
function calculateSupply(age, amountPerDay) {
  const maxAge = 67;
  const lifeConsumption = (maxAge - age) * 365 * amountPerDay;
  console.log(
    `you will need ${lifeConsumption} to last you until the ripe age of $(maxAge)`
  );
}
calculateSupply(15, 3);
calculateSupply(20, 2);
calculateSupply(40, 9);
