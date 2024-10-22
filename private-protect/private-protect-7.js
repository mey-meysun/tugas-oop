class Product {
    #name;
    constructor(idProduk, name, price) {
      this.idProduk = idProduk;
      this.#name = name;
      this.price = price;
    }
  
    get nama() {
      return this.#name;
    }
  
    set nama(value) {
      if (typeof value !== "string") {
        console.log(`Nama harus bertipe string!`);
      } else {
        this.#name = value;
      }
    }
  
    get harga() {
      return this.price;
    }
  
    set harga(value) {
      if (typeof value !== "number") {
        console.log(`Harga harus bertipe number!`);
      } else {
        this.price = value;
      }
    }
  
    #totalHarga(qty) {
      console.log(
        `
        Id Produk : ${this.idProduk}
        Nama Produk : ${this.#name} 
        Total Harga : ${this.price * qty}
        `
      );
    }

    total(qty){
        this.#totalHarga(qty);
    }
  }
  
  class ElectronicProduct extends Product {
    constructor(idProduk, name, price, masaGaransi) {
      super(idProduk, name, price);
      this.masaGaransi = masaGaransi;
    }
  
    totalHarga(qty) {
      console.log(
        `
        Id Produk : ${this.idProduk} 
        Nama Produk : ${this.name} 
        Total Harga : ${this.price * qty} 
        Masa Garansi : ${this.masaGaransi} tahun
        `
      );
    }
  }
  
  const electronicProduct = new Product(1, `Kulkas`, 1000000, 5);
  electronicProduct.harga = 1000;
  electronicProduct.nama = true;
  electronicProduct.total(5);