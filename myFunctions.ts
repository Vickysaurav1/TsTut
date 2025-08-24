function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  // logic to sign up user
}

let userLoggedIn = (name: string, email: string, isPaid: boolean = false) => {};

const myVal = addTwo(5); // 7
getUpper("hello"); // "HELLO"
signUpUser("saurav", "firstname.secondname@yopmail.com", true);
userLoggedIn("saurav", "s@s.com");

// function getValue(myVal: number): boolean {
//     if(myVal > 5) {
//         return true;
//     }
//     return false;
// }

const getHello = (s: string): string => {
  return "";
};

// const heros = ["thor", "spiderman", "ironman"];
const heros = [1, 2, 3, 4, 5];
heros.map((hero) => {
  return `hero is ${hero}`;
});


function consoleError(errmsg: string): void {
  console.log(errmsg);
}