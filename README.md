````markdown
# 💻 Final Assessment DICODING 2025

Selamat datang di repositori **Final Assessment Dicoding 2025**. Proyek ini merupakan hasil dari berbagai latihan dan studi kasus nyata menggunakan JavaScript sebagai bagian dari program pelatihan Dicoding.

Repositori ini mencakup:
- Unit Testing
- Object-Oriented Programming (OOP)
- Rekursi
- Pengujian menyeluruh (full coverage)
- Studi Kasus Sistem Pengelolaan Pesanan Restoran

---

## 📂 Struktur Folder

```bash
final-assessment-DICODING-2025/
├── optional-01-testing-basic/            # Pengujian dasar fungsi sum
│   ├── index.js
│   └── index.test.js

├── optional-02-oop-inventory/            # Sistem inventaris OOP
│   ├── Item.js
│   ├── Inventory.js
│   └── main.js

├── optional-03-recursion-fibonacci-factorial/   # Rekursi Fibonacci & Faktorial
│   ├── factorial.js
│   ├── fibonacci.js
│   └── main.js

├── optional-04-testing-coverage/         # Pengujian full coverage
│   ├── index.js
│   └── index.test.js

├── optional-07-real-world-scenario/      # Sistem pesanan restoran
│   ├── orders.js
│   └── main.js

└── package.json
````

---

## 🔧 Teknologi dan Modul

* **JavaScript Modern (ES6 Module)**
* **Node.js**
* `node:test` untuk pengujian
* `node:assert/strict` untuk assertion
* Modular `import/export`

---

## 🧪 Fitur dan Penjelasan

### 1. ✅ **Pengujian Dasar (Testing Basic)**

* Fungsi `sum(a, b)` diuji untuk berbagai skenario:

  * Input valid
  * Input non-number
  * Input negatif
  * Input nol

### 2. ✅ **OOP: Sistem Inventaris Barang**

* `Item` dan `Inventory` diimplementasikan sebagai class ES6.
* Fitur:

  * Tambah item
  * Perbarui detail item
  * Hapus item
  * Daftar item secara detail

### 3. ✅ **Rekursi: Faktorial dan Fibonacci**

* Fungsi `factorial(n)` dan `fibonacci(n)` disusun secara rekursif.
* Hasilnya ditampilkan bertahap sesuai elemen ke-n.

### 4. ✅ **Pengujian Menyeluruh (Full Coverage)**

* Fungsi `sum()` diuji terhadap seluruh cabang logika untuk menjamin reliabilitas maksimal.

### 5. ✅ **Studi Kasus Nyata: Sistem Pengelolaan Pesanan Restoran**

* Tambah pesanan dengan daftar item
* Hitung total harga otomatis
* Perbarui status pesanan: `Menunggu`, `Diproses`, `Selesai`
* Hitung total pendapatan dari pesanan yang sudah selesai
* Hapus pesanan berdasarkan ID

---

## 🚀 Cara Menjalankan

### 1. Clone Repositori

```bash
git clone https://github.com/adipramanadev/final-assessment-DICODING-2025.git
cd final-assessment-DICODING-2025
```

### 2. Jalankan Salah Satu File

Contoh:

```bash
node ./optional-07-real-world-scenario/main.js
```

### 3. Jalankan Pengujian

```bash
node --test
```

---

## 💰 Contoh Output (Sistem Restoran)

```js
[
  {
    id: '_abc123',
    customerName: 'Alice',
    items: [ { name: 'Nasi Goreng', price: 20000 }, { name: 'Teh Manis', price: 5000 } ],
    totalPrice: 25000,
    status: 'Menunggu'
  },
  ...
]
```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi **MIT**.
Silakan gunakan, modifikasi, dan kontribusi secara bebas!

---

## 🙌 Kontribusi

Pull Request dan Issue sangat disambut untuk penyempurnaan repositori ini.
Proyek ini dibuat dengan semangat belajar dan praktik nyata di dunia pemrograman.

---

**Dibuat oleh [Adipramana Dev](https://github.com/adipramanadev) — 2025**
Powered by 💡 Dicoding Final Assessment

```

---

```
