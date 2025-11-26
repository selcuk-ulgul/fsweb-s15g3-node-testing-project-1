const f = require("./index");

console.log(f.nesneyiTrimle({ isim: "  jane  " }));
console.log(f.verileniTrimle({ isim: "  jane  ", yas: " 34 " }, "isim"));

console.log(
  f.enBuyukTamsayiyiBul([{ tamsayi: 780 }, { tamsayi: 3 }, { tamsayi: 2 }])
);
const sayac = new f.Sayici(3);
console.log(sayac.asagiSay());
console.log(sayac.asagiSay());
const mevsimler = new f.Mevsimler();

console.log(mevsimler.sonraki());
