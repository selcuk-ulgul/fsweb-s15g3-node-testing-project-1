/**
 * [Görev 1] nesneyiTrimle bir nesne alır ve proplarını trimler (trim; bir stringin başında ve sonunda bulunan boşlukları(whitespaces) temizlemek)
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - stringleri trimlenmiş bir nesne döndürür
 *
 * ÖRNEK
 * nesneyiTrimle({ isim: '  jane  ' }) // yeni bir nesne döndürür { name: 'jane' }
 */
function nesneyiTrimle(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      obj[key] = obj[key].trim();
    }
  }
  return obj;
}

/**
 * [Görev 2] verileniTrimle propları string olan bir nesne alır ve gönderilen propu trimler.
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - istenilen propu trimlenmiş nesneyi döndürür
 *
 * ÖRNEK
 * verileniTrimle({ isim: '  jane  ' , yas: ' 34 '}, 'isim') // şunu döndürür { isim: 'jane', yas: ' 34 '}
 */
function verileniTrimle(obj, prop) {
  if (typeof obj[prop] === "string") {
    obj[prop] = obj[prop].trim();
  }
  return obj;
}

/**
 * [Görev 3] enBuyukTamsayiyiBul bir dizi nesne içinde bulunan tamsayılardan en büyük olanı bulur { tamsayi: 1 }
 * @param {object[]} tamsayilar - bir dizi nesne
 * @returns {number} - en büyük tamsayı
 *
 * ÖRNEK
 * enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]) // 3 döndürür
 */
function enBuyukTamsayiyiBul(tamsayilar) {
  // ✨ kodlar buraya
  const sayilar = tamsayilar.map((item) => item.tamsayi);

  return Math.max(...sayilar);
}

function Sayici(ilkSayi) {
  /**
   * [Görev 4A] Sayici bir sayaç oluşturur
   * @param {number} ilkSayi - Sayacin ilk değeri
   */

  // ✨ gerekli propları ekleyin
  this.deger = ilkSayi;
  /**
   * [Görev 4B] asagiSay metodu sıfıra doğru sayar
   * @returns {number} - bir sonraki sayı, sıfırdan küçük olamaz
   *
   * Örnek
   * const sayac = new Sayici(3)
   * sayac.asagiSay() // 3 döndürür
   * sayac.asagiSay() // 2 döndürür
   * sayac.asagiSay() // 1 döndürür
   * sayac.asagiSay() // 0 döndürür
   * sayac.asagiSay() // 0 döndürür
   */
  this.asagiSay = () => {
    const mevcut = this.deger;
    if (this.deger > 0) {
      this.deger--;
    }
    return mevcut;
  };
}

function Mevsimler() {
  /**
   * [Görev 5A] Mevsimler , bir mevsimler nesnesi oluşturur
   */
  this.mevsimler = ["ilkbahar", "yaz", "sonbahar", "kış"];
  this.index = 0; // başlangıç "ilkbahar"

  // ✨ gerekli propları ekleyin

  /**
   * [Görev 5B] sonraki metodu bir sonraki mevsimi gösterir
   * @returns {string} - bir sonraki mevsim "yaz" olarak yüklenir
   *
   * ÖRNEK
   * const mevsimler = new Mevsimler()
   * mevsimler.sonraki() // "yaz" döndürür
   * mevsimler.sonraki() // "sonbahar" döndürür
   * mevsimler.sonraki() // "kış" döndürür
   * mevsimler.sonraki() // "ilkbahar" döndürür
   * mevsimler.sonraki() // "yaz" döndürür
   */
  this.sonraki = () => {
    this.index++;

    // ternary ile kontrol: 3'ten büyükse 0 yap
    this.index = this.index > 3 ? 0 : this.index;

    return this.mevsimler[this.index];
  };
}

function Araba(isim, depo, kml) {
  /**
   * [Görev 6A] Araba 3 argüman alarak bir araba nesnesi oluşturur
   */
  this.isim = isim;
  this.kapasite = depo; // toplam depo kapasitesi
  this.kml = kml; // litre başına km
  this.odometer = 0; // başlangıç km
  this.depo = depo; // full depo ile başlar

  /**
   * [Görev 6B] sur metodu odometera km ekler ve aynı oranda depodan benzin tüketir
   */
  this.sur = (gidilecekyol) => {
    // gereken yakıt
    const gerekenBenzin = gidilecekyol / this.kml;

    if (gerekenBenzin <= this.depo) {
      // yeterli benzin varsa
      this.odometer += gidilecekyol;
      this.depo -= gerekenBenzin;
    } else {
      // benzin yetmezse, sadece gidilebilecek kadar yol
      const gidilebilecekYol = this.depo * this.kml;
      this.odometer += gidilebilecekYol;
      this.depo = 0;
    }

    return this.odometer;
  };
  /**
   * [Görev 6C] Depoya benzin ekleme
   */
  this.benzinal = (litre) => {
    // eklenen litre kapasiteyi aşarsa, kapasiteye eşitle
    this.depo =
      this.depo + litre > this.kapasite ? this.kapasite : this.depo + litre;

    return this.depo * this.kml;
  };
}

async function asenkronCiftSayi(sayi) {
  if (typeof sayi !== "number") {
    throw new Error("Lütfen bir sayı girin");
  }

  return sayi % 2 === 0;
}

module.exports = {
  nesneyiTrimle,
  verileniTrimle,
  enBuyukTamsayiyiBul,
  asenkronCiftSayi,
  Sayici,
  Mevsimler,
  Araba,
};
