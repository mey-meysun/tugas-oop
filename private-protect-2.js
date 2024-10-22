class persegiPanjang {
    #panjang;
    constructor(panjang, lebar) {
      this.#panjang = panjang;
      this.lebar = lebar;
    }
  
    get Panjang() {
      return this.#panjang;
    }
  
    set Panjang(value) {
      if (value < 0) {
        console.log(`Nilai panjang tidak boleh kurang dari 0!`);
      } else {
        this.#panjang = value;
      }
    }
  
    get Lebar() {
      return this.lebar;
    }
  
    set Lebar(value) {
      if (value < 0) {
        console.log(`Nilai lebar tidak boleh kurang dari 0!`);
      } else {
        this.lebar = value;
      }
    }
  
    #kelilingPersegiPanjang() {
      const keliling = 2 * (this.#panjang + this.lebar);
      console.log(
        `Keliling Persegi Panjang :
          Panjang : ${this.#panjang} cm
          Lebar : ${this.lebar} cm
          Keliling Persegi Panjang : ${keliling} cm.`
      );
    }
  
    luasPersegiPanjang() {
      const luas = this.#panjang * this.lebar;
      console.log(
        `Luas Persegi Panjang :
          Panjang : ${this.#panjang} cm
          Lebar : ${this.lebar} cm
          Luas Persegi Panjang : ${luas} cm\u00B2.`
      );
    }

    keliling(){
        this.#kelilingPersegiPanjang();
    }
  }
  
  const persegiPanjang1 = new persegiPanjang(12, 7);
  persegiPanjang1.keliling();
  persegiPanjang1.Panjang = -1;
  persegiPanjang1.Lebar = 3;
  persegiPanjang1.luasPersegiPanjang();
   