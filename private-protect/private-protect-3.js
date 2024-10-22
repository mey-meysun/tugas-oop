class rekeningBank {
    #nomorRekening;
    constructor(noRekening, saldo) {
      this.#nomorRekening = null;
      this.saldo = saldo;
      this.noRek = noRekening;
    }
  
    get noRek() {
      return this.#nomorRekening;
    }
  
    set noRek(value) {
      if (!rekeningBank.instances) rekeningBank.instances = [];
      for (let rekening of rekeningBank.instances) {
        if (rekening.#nomorRekening === value) {
          console.log(`Nomor Rekening ${value} sudah ada!`);
          return;
        }
      }
      this.#nomorRekening = value;
      rekeningBank.instances.push(this);
      console.log(
        `
          Pelanggan ${this.#nomorRekening} memiliki saldo Rp.${this.saldo}
          `
      );
    }
  
    #setorUang(uang) {
      console.log(
        `Pelanggan ${this.#nomorRekening}
          Saldo Awal : ${this.saldo}
          Menyetor Uang Sebesar : Rp.${uang}
          Saldo Akhir : Rp.${(this.saldo += uang)}.`
      );
    }

    setor(uang){
        this.#setorUang(uang);
    }
  
    tarikUang(uang) {
      console.log(
        `Pelanggan ${this.#nomorRekening}
          Saldo Awal : ${this.saldo}
          Menarik Uang Sebesar : Rp.${uang}
          Saldo Akhir : Rp.${(this.saldo -= uang)}.`
      );
    }
  }
  
  let rekening1 = new rekeningBank("123456", 500000);
  rekening1.setor(200000);
  
  let rekening2 = new rekeningBank("654321", 1000000);
  rekening2.tarikUang(300000);
  
  let rekening3 = new rekeningBank("123456", 750000);
  let rekening4 = new rekeningBank("1234567", 750000);
  