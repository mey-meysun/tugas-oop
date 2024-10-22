class Employee {
  #nama;
  constructor(nama, gaji) {
    this.#nama = nama;
    this.gaji = gaji;
  }

  get name() {
    return this.#nama;
  }

  set name(value) {
    if (typeof value !== "string") {
      console.log(`Nama harus bertipe string!`);
    } else {
      this.#nama = value;
    }
  }

  get gajian() {
    return this.gajian;
  }

  set gajian(value) {
    if (value < 0) {
      console.log(`Gaji harus lebih dari nol!`);
    } else {
      this.gaji = value;
    }
  }

  #hitungGajiTahunan() {
    console.log(
      `
          Nama Pegawai : ${this.#nama} 
          Gaji Bulanan : ${this.gaji}
          Gaji dalam Setahun : ${this.gaji * 12}
          `
    );
  }

  hitung() {
    this.#hitungGajiTahunan();
  }
}

class Manager extends Employee {
  constructor(nama, gaji, departemen) {
    super(nama, gaji);
    this.departemen = departemen;
  }

  hitungGajiTahunan() {
    let bonus = this.gaji * 0.1;
    console.log(
      `
          Nama Manager : ${this.nama} 
          Departemen : ${this.departemen}
          Gaji Bulanan : ${this.gaji}
          Gaji dalam Setahun + Bonus 10% : ${this.gaji * 12 + bonus}
          `
    );
  }
}

const memey = new Employee(`Memey`, 1000000, `Marketing`);
memey.gajian = -1;
memey.name = true;
memey.hitung();
