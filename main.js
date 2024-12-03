console.log("hello");

let favSongs = [
    "Tiny Dancer",
    "Running Up That Hill",
    "Don't Stop Moving",
    "Tragedy",
    "Crazy Horses"];

let profitsFromPennyPyramid = [
    {Day0:0},
    {Day1:1},
    {Day2:2},
    {Day3:4},
    {Day4:8},
    {Day5:16},
    {Day6:32},
    {Day7:64}
]

    console.log(profitsFromPennyPyramid);

    console.log(profitsFromPennyPyramid[3]);

let friends = [
    {
    Name: "Chris",
    Skill: "Changing Lives",
    },
    {
    Name: "Lizzie",
    Skill: "being Friendly",
    },
    {
    Name: "Ben",
    Skill: "code rapping",
    },
    {
    Name: "Tao",
    Skill: "hand raising",
    },
    {
    Name: "Liz",
    Skill: "crochet",
    },
    {
    Name: "Patrick",
    Skill: "Call of Duty",
    },
    {
    Name: "Tim",
    Skill: "",
    },
    {
    Name: "Tim",
    Skill: " analogies",
    },
    {
    Name: "James",
    Skill: "friendship",
    },
    {
    Name: "Joseph",
    Skill: "being positive",
    },
    {
    Name: "Max",
    Skill: "papier-mâché",
    },
]
console.log(friends);

let options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  console.log(options[6]);

  console.log(options[10]);

  console.log(options[9]);

  let englishNumbers = ["one", "two", "three", "four", "five"];


let i = 0; //declares our variable
   
  while(i < englishNumbers.length) //loops through the arrays until the end.
    {console.log(englishNumbers[i]); // console logs the item where it is 
    i++; //continues through the array
    };

  for(let i = 0; i < englishNumbers.length; i++){
    console.log(englishNumbers[i]);
 };

 let words = ["ben", "ha", "spla", "fa", "ca", "dra"];
// for loop goes here

//for(i = 0; i < words.length; i++){
   // console.log.push("t")}; This was my first guess
    
   //for (let index in words){
    //console.log(words[index]); //logs the current number
 //  words.push("t");
   //} 2nd Attempt just added t into the list


   for (let index in words){
    words[index] = words[index] + "t";
   }

console.log(words);

let Hope = {
    person: {
        firstName: "Hope",
        lastName: "Pichur",
        Hobbies: [
            "Gaming",
            "Cooking"
        ]
    },
    Porridge: {
        firstName: "Porridge",
        lastName: "Pichur",
        Hobbies: [
            "Laying down",
            "Being held"
        ]
    }
};

