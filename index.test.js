const utils = require("./index");

describe("[Görev 1] nesneyiTrimle", () => {
  test("[1] propları trimlenmiş bir nesne döndürüyor", () => {
    // ÖRNEK
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.nesneyiTrimle(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 2] verileniTrimle", () => {
  test("[3] verilen propu trimliyor", () => {
    const input = { isim: "  jane  ", yas: " 34 " };
    const expected = { isim: "jane", yas: " 34 " };
    const actual = utils.verileniTrimle(input, "isim");
    expect(actual).toEqual(expected);
  });
  test("[4] verilen dışındaki proplar trimlenmeden döndürülüyor", () => {
    const input = { isim: "  jane  ", yas: " 34 " };
    const actual = utils.verileniTrimle(input, "isim");
    expect(actual.yas).toBe(" 34 ");
  });
});

describe("[Görev 3] enBuyukTamsayiyiBul", () => {
  test("[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }", () => {
    const input = [{ tamsayi: 1 }, { tamsayi: 2 }];
    const actual = utils.enBuyukTamsayiyiBul(input);
    expect(actual).toBe(2);
  });
});

describe("[Görev 4] Sayici", () => {
  let sayici;
  beforeEach(() => {
    sayici = new utils.Sayici(3);
  });
  test("[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor", () => {
    expect(sayici.asagiSay()).toBe(3);
  });
  test("[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor", () => {
    sayici.asagiSay();
    expect(sayici.asagiSay()).toBe(2);
  });
  test("[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz", () => {
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    expect(sayici.asagiSay()).toBe(0);
    expect(sayici.asagiSay()).toBe(0);
  });
});

describe("[Görev 5] Mevsimler", () => {
  let mevsimler;
  beforeEach(() => {
    mevsimler = new utils.Mevsimler();
  });
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    expect(mevsimler.sonraki()).toBe("yaz");
  });
  test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    mevsimler.sonraki();
    expect(mevsimler.sonraki()).toBe("sonbahar");
  });
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    mevsimler.sonraki();
    mevsimler.sonraki();
    expect(mevsimler.sonraki()).toBe("kış");
  });
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    expect(mevsimler.sonraki()).toBe("ilkbahar");
  });
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    for (let i = 0; i < 4; i++) mevsimler.sonraki();
    expect(mevsimler.sonraki()).toBe("yaz");
  });
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    for (let i = 0; i < 39; i++) mevsimler.sonraki();
    expect(mevsimler.sonraki()).toBe("ilkbahar");
  });
});

describe("[Görev 6] Araba", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Araba("focus", 20, 30);
  });
  test("[15] arabayı sürünce güncellenmiş odometer döndürüyor", () => {
    expect(focus.sur(60)).toBe(60);
  });
  test("[16] arabayı sürmek benzin tüketiyor", () => {
    focus.sur(60);
    expect(focus.depo).toBeLessThan(20);
  });
  test("[17] benzinalma arabayı sürmeye izin veriyor", () => {
    focus.sur(600); // tüm depoyu bitirir
    expect(focus.depo).toBe(0);
    focus.benzinal(10);
    expect(focus.depo).toBe(10);
    expect(focus.sur(300)).toBeGreaterThan(600);
  });
  test("[18] dolu depoya benzin alma etki etmiyor", () => {
    const before = focus.depo;
    focus.benzinal(5);
    expect(focus.depo).toBe(before);
  });
});

describe("[Görev 7] asenkronCiftSayi", () => {
  test("[19] bir çift sayı verilirse true çözümlüyor", async () => {
    const result = await utils.asenkronCiftSayi(4);
    expect(result).toBe(true);
  });
  test("[20] tek sayı verilirse false çözümlüyor", async () => {
    const result = await utils.asenkronCiftSayi(5);
    expect(result).toBe(false);
  });
  test("[21] sayı olmayan değer hata fırlatıyor", async () => {
    await expect(utils.asenkronCiftSayi("abc")).rejects.toThrow(
      "Lütfen bir sayı girin"
    );
  });
});
