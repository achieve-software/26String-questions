// SORULAR
let url = "https://www.google.com";
let str = "Lorem ipsum dolor sit amet";
//1-url kaç karakterlidir?
let sonuc1 = "";
sonuc1 = url.length;

//2-str kaç kelimeden oluşmaktadır?
sonuc1 = str.split(" ").length;

//3-url https ile mi başlıyor?
sonuc1 = url.startsWith("https");
if (sonuc1) {
  //   console.log("evet başlıyor");
}
//4-str içerisinde ipsum kelimesi var mı?

sonuc1 = str.includes("ipsum");

if (sonuc1) {
  console.log("evet var");
} else {
  console.log("hayır yok");
}

//5-url ve str değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
//https://www.google.com/lorem-ipsum-dolor-sit-amet
str = str.toLowerCase().replaceAll(" ", "-");
sonuc1 = `${url}/${str}`;
console.log(sonuc1);

// 6- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// console.log(reverseString('hello world')) // output: dlrow olleh

function reverseString(metin3) {
  let str1 = "";
  for (let i = metin3.length - 1; i >= 0; i--) {
    str1 += metin3[i];
  }
  return str1;
}
console.log(reverseString("hello world"));
console.log(reverseString("ali"));
console.log(reverseString("veli"));

// 7- Belirli bir string ifadenin terside aynı kelime ise buna palindrome kelime denir. Örn: NAZAN, KAZAK, TİRİT ..Girilen bir kelimenin palindrome olup olmadığını bulan fonksiyonu yazınız...

function reverseString1(dz) {
  let trs = "";
  for (let i = dz.length - 1; i >= 0; i--) {
    trs += dz[i];
  }
  return trs;
}

const isPalindrome = function (w) {
  const reversed = reverseString1(w);
  return reversed == w
    ? `${w} bir palindrome texttir`
    : `${w} bir palindrome text değildir`;
};
console.log(isPalindrome("nazan"));
console.log(isPalindrome("ali"));
console.log(isPalindrome("kazak"));

console.log(isPalindrome("talat"));
console.log(isPalindrome("veli"));

//8-konsoldan girilen harf sayısının kaç tane olduğunu aşağıda verilen metinde bulan uygulamayı yazınız.
let metin =
  "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, omnis temporibus dignissimos officia adipisci sed quasi ratione dolorum neque cumque quia quibusdam ullam possimus. Magnam facilis tenetur, laudantium a dolorum explicabo, corporis deleniti aspernatur excepturi distinctio, voluptate est! Quibusdam, blanditiis?";

let harf = prompt("harfi giriniz");
if (harf.length != 1) {
  console.log("lütfen tek haneli harf giriniz");
} else {
  function harfBul(harf) {
    let counter = 0;
    for (let i = 0; i < metin.length; i++) {
      if (metin.charAt(i).toLowerCase() === harf.toLowerCase()) counter += 1;
    }
    return counter;
  }
}
// console.log(harfBul(harf));

// 9- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?
// console.log(findVowels('hello world')) // output: eoo
const sntc = "hello world";
function findVowels(sntc) {
  let vowels = "";
  for (let i = 0; i < sntc.length; i++) {
    if (
      sntc[i] == "a" ||
      sntc[i] == "e" ||
      sntc[i] == "ı" ||
      sntc[i] == "i" ||
      sntc[i] == "o" ||
      sntc[i] == "ö" ||
      sntc[i] == "u" ||
      sntc[i] == "ü"
    ) {
      vowels += sntc[i];
    }
  }
  return vowels;
}
console.log(findVowels(sntc));
console.log(findVowels("alex"));
console.log(findVowels("mehmet"));
console.log(findVowels("araba"));
console.log(findVowels("ahmet"));
