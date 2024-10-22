class Bank {
  #namaBank;
  constructor(namaBank, kantorCabang) {
    this.#namaBank = namaBank;
    this.kantorCabang = [];
    this.tambahKantor(kantorCabang);
  }

  get nameCabang() {
    return this.kantorCabang.join(`, `);
  }

  set nameCabang(value) {
    if (this.kantorCabang.includes(value)) {
      console.log(`Kantor Cabang ${value} sudah ada!`);
    } else {
      this.kantorCabang.push(value);
      console.log(
        `Bank ${this.#namaBank} Cabang ${value} berhasil ditambahkan`
      );
    }
  }

  tambahKantor(kantorCabang) {
    this.nameCabang = kantorCabang;
  }

  #hapusKantor(kantorCabang) {
    this.kantorCabang = this.kantorCabang.filter(
      (kantor) => kantor !== kantorCabang
    );
    console.log(
      `Bank ${this.#namaBank} Cabang ${kantorCabang} berhasil dihapus`
    );
  }

  hapus(kantorCabang) {
    this.#hapusKantor(kantorCabang);
  }

  semuaKantor() {
    console.log(
      `Semua kantor cabang dari Bank ${this.#namaBank} : \n${this.kantorCabang}`
    );
  }
}

const BRI = new Bank(`BRI`, `Cirebon`);
BRI.tambahKantor(`Jogja`);
BRI.nameCabang = "Cirebon";
BRI.nameCabang = "Bandung";
BRI.hapus("Bandung");
BRI.semuaKantor();
