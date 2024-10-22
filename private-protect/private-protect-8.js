class BankAccount {
    #nomorRekening;
    constructor(noRekening, nameNasabah, saldo) {
      this.#nomorRekening = '';
      this.namaNasabah = '';
      this.saldo = saldo;
      this.noRek = noRekening;
      this.name = nameNasabah;
    }
  
    get noRek() {
      return this.#nomorRekening;
    }
  
    set noRek(value) {
      if (!BankAccount.instances) BankAccount.instances = [];
      for (let rekening of BankAccount.instances) {
        if (rekening.#nomorRekening === value) {
          console.log(`Nomor Rekening ${value} sudah ada!`);
          return;
        }
      }
      this.#nomorRekening = value;
      BankAccount.instances.push(this);
      
      if(this.namaNasabah && this.#nomorRekening){
        console.log(
          `
              Pelanggan ${this.namaNasabah} (${this.#nomorRekening}) memiliki saldo Rp.${this.saldo}
              `
        );
      }
    }
  
    get name() {
      return this.namaNasabah;
    }
  
    set name(value) {
      if (!BankAccount.instances) BankAccount.instances = [];
      for (let nama of BankAccount.instances) {
        if (nama.namaNasabah === value) {
          console.log(`Nama Nasabah ${value} sudah ada!`);
          return;
        }
      }
      this.namaNasabah = value;
  
      if(this.namaNasabah && this.#nomorRekening){
        console.log(
          `
              Pelanggan ${this.namaNasabah} (${this.#nomorRekening}) memiliki saldo Rp.${this.saldo}
              `
        );
      }
    }
    
  
    #setorUang(uang) {
      this.saldo += uang;
      console.log(
        `
          Pelanggan ${this.namaNasabah} (${this.#nomorRekening}) menyetor uang sebesar Rp.${uang}
          Jumlah Saldo : Rp.${this.saldo}
          `
      );
    }

    setor(uang){
        this.#setorUang(uang);
    }
  
    tarikUang(uang) {
      if (uang > this.saldo) {
        console.log(
          `
            Tarik uang gagal, saldo tidak mencukupi. 
            Saldo Anda: Rp.${this.saldo}
            `
        );
      } else {
        console.log(
          `
          Pelanggan ${this.namaNasabah} (${
            this.#nomorRekening
          }) menarik uang sebesar : Rp.${uang}
          Jumlah Saldo : Rp.${(this.saldo -= uang)}
          `
        );
      }
    }
  
    transferUang(uang, akunPenerima) {
      if (uang > this.saldo) {
        console.log(
          `
            Transfer gagal, saldo tidak mencukupi. 
            Saldo Anda: Rp.${this.saldo}
            `
        );
      } else {
        this.saldo -= uang;
        akunPenerima.saldo += uang;
  
        console.log(
          `
          Pelanggan ${this.namaNasabah} (${this.#nomorRekening}) transfer Rp.${uang} ke ${akunPenerima.namaNasabah} (${akunPenerima.#nomorRekening}).
          Saldo penerima: Rp.${akunPenerima.saldo}, Saldo Anda: Rp.${this.saldo}`
        );
      }
    }
  }
  
  const nuril = new BankAccount(123, `Nuril`, 1000);
  const memey = new BankAccount(123, `Nuril`, 1000);
  const nursabilah = new BankAccount(1234, `Nuri`, 1000);
  const alifa = new BankAccount(1234, `Alifa`, 1000);
  alifa.noRek = 121;
  alifa.setor(100);