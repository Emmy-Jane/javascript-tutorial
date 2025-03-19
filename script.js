//############# Javascript data types #############//
// 1. number =1234
// 2. string = "Hello"
// 3. boolean = true/false
// 4. undefined
// 5. null
// 6. arrays and object
// 7. symbol
// 8. bigint

//############# javascript variables #############//
// create const (text: string), var (score: number), let (passed: bool)
// const text = "exam, mnknk, kkienjike";
// var score = 15;
// let passed = false;

// ##################   ARRAYS  ######################//
// const jobs = [
//   "teacher",
//   "painter",
//   "farmer",
//   1000,
//   "emma",
//   "justine",
//   "kenneth",
//   "jaden",
//   500,
//   true,
// ];

// ##################   Objects  ######################//
const transactions = {
  balance: 5000,
  egg: 50,
  jobs: [
    "teacher",
    "painter",
    "farmer",
    [
      "cook",
      "yes",
      {
        pet: "cat",
        age: 2,
        kids: [
          "jack",
          "joe",
          "emma",
          {
            num: true,
            game: false,
            names: {
              names: ["justine", "kenneth", "jaden"],
              jet: [
                "rocket",
                "plane",
                [
                  "jack",
                  "joe",
                  "emma",
                  {
                    num: true,
                    champion: [
                      "teacher",
                      "painter",
                      "farmer",
                      { num: true, game: "champion" },
                    ],
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
    { palmpay: 1000, opay: 3000, moniepoint: 7000 },
  ],
  leaf: 200,

  table: "versace",
  pet: "MJ",
};
// console.log(transactions.jobs[3][2].kids[3].names.jet[2][3].champion[3].game);

// No. 1
var birthYear = 2004;
var futureYear = 2025;
var age1 = futureYear - birthYear;
console.log(age1);

// No. 2
var maxAge = 21;
var estimatedDailyAmount = 50;
var daysLeft = maxAge * 365;
var totalAmount = daysLeft * estimatedDailyAmount;
console.log(totalAmount);

// No. 3
var celsiusTemperature = 25;
var fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
console.log(fahrenheitTemperature);
console.log(`fahrenheit temperature is ${fahrenheitTemperature}`);

var fahToCelsius = ((fahrenheitTemperature - 32) * 5) / 9;
console.log(`fah to celsius is ${fahToCelsius}`);

// FUNCTIONS
function balance(income, exp) {
  const balance = income - exp;
  console.log(balance);
}
// calculateBalance(100, 1000);

const addNum = (num1, num2) => {
  var sum = num1 + num2;
  console.log(sum);
};
addNum(5, 10);
// No. 4
// x = job
// y = location
// z = partner
// n = kids
function tellFortune(x, y, z, n) {
  console.log(
    `you will be a ${x} in ${y} and married to ${z} and with ${n} kids.`
  );
}

tellFortune("software Enginner", "Dubai", "Obi", 3);
tellFortune("Lawyer", "America", "Emily", 4);
tellFortune("Doctor", "Chicago", "lilian", 5);

// No.5
function calculateDogAge(PuppyAge) {
  const calculateDogAge = PuppyAge * 7;
  console.log(`my doggie is ${calculateDogAge} years old`);
}
calculateDogAge(3);
calculateDogAge(6);
calculateDogAge(9);

// No. 6
function calculateSupply(age, amountPerDay) {
  const maxAge = 80;
  const lifeConsumption = (maxAge - age) * 365 * amountPerDay;
  console.log(
    `you will need ${lifeConsumption} to last you until the ripe old age of ${maxAge}.`
  );
}
calculateSupply(30, 5);
calculateSupply(15, 3);
calculateSupply(20, 2);
