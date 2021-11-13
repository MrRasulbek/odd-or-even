var firstName = prompt("Iltimos ismingizni yozing:")

while (!isNaN(firstName)){
               firstName = prompt("Iltimos ismingizni yozayotganingizda faqat harflardan foydalaning !")
}

console.log(firstName+" bu dasturda biror soning juft yoki toqligini aniqlashingiz mumkin !");
alert(firstName+" bu dasturda biror soning juft yoki toqligini aniqlashingiz mumkin !");

var number = +prompt(firstName+" iltimos 0 dan tashqari biror son kiriting chunki nol juft ham emas toq ham emas: ")
while (isNaN(number) || number == 0){
               number = +prompt(firstName+" eslatib o'tamiz, iltimos faqat son kiriting va kiritgan soningiz 0 bo'lmasin !")
}
if (number % 2 == 0 && number != 0){
               console.log(firstName+" siz "+number+" ni kiritdingiz va bu juft son.");
               alert(firstName+" siz "+number+" ni kiritdingiz va bu juft son.");
}
else if (number % 2 == 1){
               console.log(firstName+" siz "+number+" ni kiritdingiz va bu toq son.");
               alert(firstName+" siz "+number+" ni kiritdingiz va bu toq son.");
}
console.log(firstName+" bu dastrudan foydalanganingiz uchun rahmat, sizga eng yaxshi tilaklarni tilab Rasuljon");
alert(firstName+" bu dastrudan foydalanganingiz uchun rahmat, sizga eng yaxshi tilaklarni tilab Rasuljon");