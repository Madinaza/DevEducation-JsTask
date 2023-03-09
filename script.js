// 1. Ədədin kvadratın və kubun, console çıxardın.
let numberA=2;
let square=numberA**2;
let cube=numberA**3;
console.log(cube);

// 2. Sürət (v) 60 km/saat. Məsafə (s) 180 km. Neçə “dəyqəyə” bütün məsafə qət ediləcək?
let v=60;
let s=180;
let t=s/v;
console.log(t);

// 3. 3 ədəd var. Ədədlərin arasında ən böyük olanı tapıb console çıxardın.
let a=25;
let b=26;
let c=3;
if (a>=b &&a>=c) {
    console.log(a);
}
else if(b>=a&&b>=c){
    console.log(b);
}
else{
    console.log(c);
}

// 4. Ədədin tək və yaxud cüt olduğunu aşkarlayıb, console çıxardın.

let evenOrOddNum=50;

if(evenOrOddNum%2==1){
    console.log("This number is odd")
}
else{
    console.log("This number is even")
}

// 5. 1-dən 7-yə kimi bir ədəd daxil etmək olar. Ədədə uyğun olaraq həftənin gününü console çıxardın.

let day=1;

switch (day) {
       case 1:
          console.log("Monday");
          break;
        case 2:
            console.log("Tuesday");
            break;

         case 3:
              console.log("Wednesday");
             break;

         case 4:
             console.log("Thursday");
             break;

         case 5:
             console.log("Friday");
             break;

        case 6:
             console.log("Saturday");
             break;

        case 7:
             console.log("Sunday");
             break;

    default:console.log('1-7 arasinda reqem secin');
        break;
}

// 6. İkirəqəmli ədədin hərfi təsvirini console çıxardın. Məsələn, "25" daxil etdikdə console "iyirmi beş", "13" isə "on üç" çıxaracağ.

let num=72;
let remainder=num%10;
let tamNum=(num-remainder);
console.log(tamNum);

switch (num) {
    case 10 :
        console.log("On")
        break;
        case 11:
        console.log("On bir")
        break;
        case 12:
        console.log("On iki")
        break;
        case 13:
        console.log("On uc")
        break;
        case 14:
        console.log("On dord")
        break;
          case 15:
        console.log("On bes")
        break;
        case 16:
        console.log("On alti")
        break;
        case 17:
        console.log("On yeddi")
        break;
        case 18:
        console.log("On sekkiz")
        break;
        case 19:
        console.log("On doqquz")
        break;
        case 20:
        console.log("Iyirmi")
        break;
        case 21:
        console.log("Iyirmi bir")
        break;
        case 22:
        console.log("Iyirmi iki")
        break;
        case 23:
        console.log("Iyirmi uc")
        break;
        case 24:
        console.log("Iyirmi dord")
        break;
        case 25:
        console.log("Iyirmi bes")
        break;
        case 26:
        console.log("Iyirmi alti")
        break;
        case 27:
        console.log("Iyirmi yeddi")
        break;
        case 28:
        console.log("Iyirmi sekkiz")
        break;
        case 29:
        console.log("Iyirmi doqquz")
        break;
        case 30:
        console.log("Otuz")
        break;
        case 31:
        console.log("Otuz bir")
        break;
        case 32:
        console.log("Otuz iki")
        break;
        case 33:
        console.log("Otuz uc")
        break;
        case 34:
        console.log("Otuz dord")
        break;
        case 35:
        console.log("Otuz bes")
        break;
        case 36:
        console.log("Otuz alti")
        break;
        case 37:
        console.log("Otuz yeddi")
        break;
        case 38:
        console.log("Otuz sekkiz")
        break;
        case 39:
        console.log("Otuz doqquz")
        break;
        case 40:
        console.log("qirx")
        break;
        case 41:
        console.log("qirx bir")
        break;
        case 42:
        console.log("qirx iki")
        break;
        case 43:
        console.log("qirx uc")
        break;
        case 44:
        console.log("qirx dord")
        break;
        case 45:
        console.log("qirx bes")
        break;
        case 46:
        console.log("qirx alti")
        break;
        case 47:
        console.log("qirx yeddi")
        break;
        case 48:
        console.log("qirx sekkiz")
        break;
        case 49:
        console.log("qirx doqquz")
        break;
        case 50:
        console.log("elli")
        break;
        case 51:
        console.log("elli bir")
        break;
        case 52:
        console.log("elli iki")
        break;
        case 53:
        console.log("elli uc")
        break;
        case 54:
        console.log("elli dord")
        break;
        case 55:
        console.log("elli bes")
        break;
        case 56:
        console.log("elli alti")
        break;
        case 57:
        console.log("elli yeddi")
        break;
        case 58:
        console.log("elli sekkiz")
        break;
        case 59:
        console.log("elli doqquz")
        break;
        case 60:
        console.log("altmis")
        break;
        case 61:
        console.log("altmis bir")
        break;
        case 62:
        console.log("altmis iki")
        break;
        case 63:
        console.log("altmis uc")
        break;
        case 64:
        console.log("altmis dord")
        break;
        case 65:
        console.log("altmis bes")
        break;
        case 66:
        console.log("altmis alti")
        break;
        case 67:
        console.log("altmis yeddi")
        break;
        case 68:
        console.log("altmis sekkiz")
        break;
        case 69:
         console.log("altmis doqquz")
         break;
         case 70:
            console.log("yetmis")
             break;


    default:
        console.log("zehmet olmasa 10-70 arasi reqem secin")
        break;
}

// 7. 0-1000 intervalında olan bir ədədin neçə ədədli olduğunu console çıxardın. Məsələn, "76" daxil etdikdə console “iki rəqəmli ədəd” çıxaracağ.

let numc=999;
if(numc>=0&&numc<10){
    console.log("tek reqemli")
}
else if(numc>=10&&numc<100){
    console.log("iki reqemli")
}
else if(numc>=100&& numc<1000){
    console.log("uc reqemli")
}
else{
    console.log("1-1000 arasinda reqemler secin")
}


// 1. 10-dan 1-ə qədər bütün ədədləri console çıxardın.

for (let i = 10; i>0; i--) {
    console.log(i);
}
// 2. 0-100 intervalında yerləşən 9-a tam bölünən ədədləri console çıxardın.

for (let i = 1; i <100; i++) {
   if(i%9==0){
    console.log(i);
   }
}

// 3. 0-100 intervalında yerləşən cüt ədədlərin sayın tapıb, console çıxardın.

let count=0;
for (let i = 0; i <100; i++) {
    if(i%2==0){
        count++;
    }
}
console.log(count);

// 4. Ədədin “Sadə” və ya “Mürəkkəb” olduğunu tapib, console çıxardın. Məsələn, “13” console-da “13 sadə ədəddir”.

let eded=13;
let result;

for (let i = 0; i<eded; i++) {
    if(eded%2==0){
        result="murekkebdir"
    }
    else{
        result="sadedir"
    }
}
for (let i = 7; i<eded; i++) {
    if(eded%2==0||eded%3==0||eded%5==0||eded%7==0){
        result="murekkebdir"
    }
    else{
        result="sadedir"
    }
}
console.log(result);

// 5. 2 verilmiş ədədin intervalında yerləşən ədədləri kvadrata yüksəldib, console çıxardın.


let num1=15;
let num2=17;
let numres;

if(num1>num2){
    for (let i = num2+1; i < num1; i++) {
        numres=i**2;
        console.log(numres);
    }
}
else{
    for (let i = num1+1; i < num2; i++) {
        numres=i**2;
        console.log(numres);
    }
}

// 6. 2 verilmiş ədədin intervalında yerləşən ədədlərin cəmini tapıb, console çıxardın. (while ilə)
let sumofnum=0;
// if(num1>num2){
//     for (let i = num2+1; i < num1; i++) {
//         sumofnum+=i;
//     }
//     console.log(sumofnum);
// }
// else{
//     for (let i = num1+1; i < num2; i++) {
//         sumofnum+=i;
//     }
//     console.log(sumofnum);
// }

let numother2=num2+1;
let numother1=num1+1;
while(num1>numother2){
    sumofnum=sumofnum+numother2;
    numother2++;
}
while(num2>numother1){
    sumofnum=sumofnum+numother1;
    numother1++;
}

console.log(sumofnum);

// 7. Verilmiş ədədin ən böyük bölənini tapib, console çıxardın.

let num3=100;
let maxDiv=0;
for (let i = 2; i < num3; i++) {
   if(!(num3%i)){
    if(i>maxDiv){
        maxDiv=i;
    }
   }
}
console.log(maxDiv);

// 8. (BONUS) console-da “X”-lərdən ibarət düzbucaqlı üçbucaq çıxardın. Daha sonra bu üçbucaqı x və y xətti üzrə çevirin. 

for (let i = 1; i < 6; i++) {
    let str=""
    for (let j = 1; j <=i; j++) {
       str+="X";
    }
    console.log(str)
}
console.log("-----")
for (let i = 1; i < 6; i++) {
    let str=""
    for (let j = 6; j >i; j--) {
       str+="X";
    }
    console.log(str)
}
console.log("-----")
let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    str += " ";
  }
  for (let k = 0; k < i; k++) {
    str += "X";
  }
  str += "\n";
}
console.log(str);



