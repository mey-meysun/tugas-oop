class Person {
  #firstName;
    constructor(firstName, lastName, age) {
      this.#firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get NameAwal() {
      return this.#firstName;
    }
  
    set NameAwal(value) {
      if (value.length == 0) {
        console.log(`Nama Awal tidak boleh kosong!`);
      } else {
        this.#firstName = value;
      }
    }
  
    get NameAkhir() {
      return this.lastName;
    }
  
    set NameAkhir(value) {
      if (value.length == 0) {
        console.log(`Nama Akhir tidak boleh kosong!`);
      } else {
        this.lastName = value;
      }
    }
    
    get Age() {
      return this.age;
    }
  
    set Age(value) {
      if (value < 0) {
        console.log(`Umur tidak boleh kurang dari 0!`);
      } else {
        this.age = value;
      }
    }
  
  
    #showDetails() {
      console.log(
        `Person's Detail :
          First Name : ${this.#firstName}
          Last Name : ${this.lastName}
          Age : ${this.age} years old.`
      );
    }

    showDetailsPlease(){
      this.#showDetails();
    }
  }
  
  const nic = new Person("Nicholas", "Saputra", 12);
  nic.showDetailsPlease();
  nic.NameAwal = "Reza";
  nic.NameAkhir = "";
  nic.Age = -1;
  console.log(nic.NameAkhir);
  nic.showDetailsPlease();
    