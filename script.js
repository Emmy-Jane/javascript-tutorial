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
const text = "exam, mnknk, kkienjike";
var score = 15;
let passed = false;

// ##################   ARRAYS  ######################//
const jobs = [
  "teacher",
  "painter",
  "farmer",
  1000,
  "emma",
  "justine",
  "kenneth",
  "jaden",
  500,
  true,
];

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
console.log(transactions.jobs[3][2].kids[3].names.jet[2][3].champion[3].game);
