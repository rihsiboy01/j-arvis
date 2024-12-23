let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let sendBtn = document.querySelector("#send");
let inputField = document.querySelector(".iki");
let messageList = document.querySelector("ol");
console.log(sendBtn);

sendBtn.addEventListener("click", function () {
  let userInput = inputField.value.trim();

  if (userInput === "") {
    alert("Nimadir yozing!");
    return;
  }

  let userMessage = document.createElement("li");
  userMessage.style.marginLeft = "600px";
  userMessage.style.width = "300px";
  userMessage.textContent = userInput;
  messageList.appendChild(userMessage);

  let botReply = document.createElement("li");
  botReply.style.marginLeft = "600px";
  botReply.style.width = "580px";

  switch (userInput.toLowerCase()) {
    case "salom jarvis":
      botReply.textContent = "Salom, Rihsiboy! Qanday yordam bera olaman?";
      break;
    case "kastyumi qanaqa metaldan yasi":
      botReply.textContent =
        "Menimcha, oltin va titan qorishmasidan yasang, chunki u zanglamaydi va chidamli.";
      break;
    case "palladi nima":
      botReply.textContent = "Paladi bu katalizator va filtr modda.";
      break;
    case "dunyoda nima kerak":
      botReply.textContent = "Dunyoda namoz va Qur'on kerak.";
      break;
    case "nomoz qanday o'qiladi":
      botReply.textContent =
        "Namozda avval niyat qilinadi, so‘ngra qo‘lni quloq yumshog‘iga tekkizib, 'Allohu Akbar' deyiladi...";
      break;
    case "namoz nechi mahal o'qiladi":
      botReply.textContent =
        "Namoz 5 mahal o'qiladi: bomdod, peshin, asr, shom, xufton.";
      break;
    case "plutoni haqida":
      botReply.textContent =
        "Plutoni bu radioaktiv modda bo'lib, inson hayoti uchun xavfli.";
      break;
    case "jarvis reaktor haqida":
      botReply.textContent =
        "Reaktor bu nazorat ostida yadro reaksiyalarini amalga oshiradigan qurilma.";
      let img5 = document.createElement("img");
      img5.src = "./12344567.jpg";
      img5.style.maxWidth = "200px";
      img5.style.display = "block";
      img5.style.margin = "10px auto";
      botReply.textContent = "";
      botReply.appendChild(img5);
      console.log(img5);
      break;
    case "dunyodagi eng zor futbalist kim":
      botReply.textContent = "Dunyodagi eng zo‘r futbolchi – Ronaldo.";
      break;
    case "dunyodagi eng aqli odam kim":
      botReply.textContent = "Dunyodagi eng aqli odam bu – Rihsiboy!";
      break;
    case "dunyodagi eng katta hayvon":
      botReply.textContent = "Dunyodagi eng katta hayvon – Moviy kit.";
      break;
    case "eng katta osmonopar bino":
      botReply.textContent = "Eng katta osmonoparka – Burj Xalifa.";
      break;
    case "yutubeni och":
      let a = document.createElement("a");
      a.href = "https://www.youtube.com/";
      a.target = "_blank";
      a.click();
      break;
    case "speysni och":
      let b = document.createElement("a");
      b.href = "https://space.marsit.uz/";
      b.target = "_blank";
      b.click();
      break;
    case "instagramni och":
      let q = document.createElement("a");
      q.href = "https://www.instagram.com/?hl=en";
      q.target = "_blank";
      q.click();
      break;
    case "fekebukni och":
      let g = document.createElement("a");
      g.href = "https://www.facebook.com/";
      g.target = "_blank";
      g.click();
      break;
    case "kastyumni qidir":
      let gugle = "https://www.google.com/search?q=";
      let qidirish = "iron men kastyumini rasimi";
      window.open(gugle + encodeURIComponent(qidirish), "_blank");
      break;

    case "qaytadigan metall":
      botReply.textContent = "Oltin va alyuminiy qayta ishlashga yaroqli.";
      break;
    case "kastyumi rasimini chiqar":
      let img = document.createElement("img");
      let img1 = document.createElement("img");
      let img2 = document.createElement("img");
      img.src = "./123.webp";
      img1.src = "./1234.webp";
      img2.src = "./12345.webp";
      img.style.maxWidth = "200px";
      img.style.display = "block";
      img.style.margin = "10px auto";

      img1.style.maxWidth = "200px";
      img1.style.display = "block";
      img1.style.margin = "10px auto";

      img2.style.maxWidth = "200px";
      img2.style.display = "block";
      img2.style.margin = "10px auto";
      botReply.textContent = "";
      botReply.appendChild(img);
      botReply.appendChild(img1);
      botReply.appendChild(img2);
      console.log(img);
      break;
    case "mini reaktor rasimini chiqar":
      let img4 = document.createElement("img");
      img4.src = "./123456.jpg";
      img4.style.maxWidth = "200px";
      img4.style.display = "block";
      img4.style.margin = "10px auto";
      botReply.textContent = "";
      botReply.appendChild(img4);
      console.log(img4);
      break;

    case "kastyum rasimin chiqar":
      img.src = "./12345.webp";
      img.style.maxWidth = "200px";
      img.style.display = "block";
      img.style.margin = "10px auto";
      botReply.textContent = "";
      botReply.appendChild(img);
      console.log(img);
      break;
    default:
      botReply.textContent = "Bu haqda ma'lumotim yo'q.";
  }

  // if( inputField.value === includes("salom") ){
  //   let a = document.createComment("li")
  //   a.textContent("salom rihsiboy qanday yordam bera olaman")
  // }

  if (botReply.textContent || botReply.children.length > 0) {
    messageList.appendChild(botReply);
  }

  inputField.value = "";
});

let inp2 = document.querySelector("#lolo");

inp2.addEventListener("input", (e) => {
  let userMessage = document.createElement("li");
  let img = document.createElement("img");
  let g = e.target.value;
  userMessage.appendChild = img;
  img.appendChild = g;
});
