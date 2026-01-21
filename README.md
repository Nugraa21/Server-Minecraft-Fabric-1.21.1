# Panduan Instalasi Server Minecraft Fabric 1.21.1

Repository ini menyediakan panduan lengkap untuk menjalankan **Minecraft Fabric Server versi 1.21.1**. Fokus utama panduan ini adalah menggunakan **GitHub Codespaces** sebagai infrastruktur server dan **playit.gg** untuk solusi tunneling agar server dapat diakses secara publik tanpa perlu *port forwarding* manual.

---

## Fitur Utama
- **Minecraft Fabric 1.21.1**: Versi stabil terbaru dengan performa optimal.
- **GitHub Codespaces**: Infrastruktur berbasis cloud yang andal dan mudah dikonfigurasi.
- **playit.gg**: Tunneling otomatis untuk akses publik yang aman.
- **Mod Ready**: Konfigurasi siap menggunakan mod Fabric (seperti Lithium dan FerriteCore).
- **Shader Support**: Mendukung penggunaan shader pada sisi client untuk visual yang lebih baik.

---

## Struktur Direktori
Berikut adalah gambaran umum struktur folder dalam server ini:
```text
fabric-1.21.1/
├── fabric-server-launch.jar
├── mods/
│   ├── fabric-api.jar
│   ├── lithium.jar
│   └── ferrite-core.jar
├── config/
├── world/
├── eula.txt
└── server.properties
```

---

## Kebutuhan Sistem
1. Akun GitHub (dengan akses ke Codespaces).
2. Akun playit.gg.
3. Java 21 (OpenJDK 21).
4. Client Minecraft Java Edition.

---

## Tutorial Instalasi Langkah-demi-Langkah

### 1. Persiapan Awal
Pastikan Anda telah melakukan *fork* repository ini ke akun GitHub Anda sendiri sebelum memulai di Codespaces.

### 2. Update Sistem dan Instalasi Java 21
Minecraft 1.21.1 memerlukan Java 21 agar dapat berjalan dengan benar. Gunakan perintah berikut di terminal:
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install openjdk-21-jdk -y
java -version
```
*Pastikan output menunjukkan versi Java 21.*

### 3. Membuat Direktori Server dan Mengunduh Installer
Gunakan perintah berikut untuk menyiapkan folder instalasi:
```bash
mkdir fabric-1.21.1 && cd fabric-1.21.1
wget https://maven.fabricmc.net/net/fabricmc/fabric-installer/1.0.1/fabric-installer-1.0.1.jar
```

### 4. Instalasi Fabric Server
Jalankan perintah berikut untuk mengunduh core server Minecraft:
```bash
java -jar fabric-installer-1.0.1.jar server -mcversion 1.21.1 -downloadMinecraft
```
Setelah selesai, file `fabric-server-launch.jar` akan muncul di direktori Anda.

### 5. Konfigurasi EULA (End User License Agreement)
Jalankan server untuk pertama kalinya agar file konfigurasi muncul:
```bash
java -Xmx8G -Xms4G -jar fabric-server-launch.jar nogui
```
Gunakan editor seperti `nano` untuk menyetujui EULA:
```bash
nano eula.txt
```
Ubah `eula=false` menjadi `eula=true`. Simpan dengan menekan `CTRL+O`, lalu `ENTER`, dan keluar dengan `CTRL+X`.

### 6. Menghubungkan Server ke Internet dengan playit.gg
Agar teman Anda bisa bergabung, instal playit.gg:
```bash
curl -SsL https://playit-cloud.github.io/ppa/key.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/playit.gpg >/dev/null
echo "deb [signed-by=/etc/apt/trusted.gpg.d/playit.gpg] https://playit-cloud.github.io/ppa/data ./" | sudo tee /etc/apt/sources.list.d/playit-cloud.list
sudo apt update
sudo apt install playit -y
```
Jalankan perintah `playit`, lalu ikuti tautan yang muncul untuk melakukan registrasi tunnel (pilih Minecraft TCP dan port 25565).

### 7. Menambahkan Mod Performa (Sangat Disarankan)
Masuk ke folder `mods` dan unduh mod yang diperlukan:
```bash
cd mods
wget https://cdn.modrinth.com/data/P7dR8mSH/versions/bu0Zp0g1/fabric-api-0.102.0+1.21.1.jar
wget https://cdn.modrinth.com/data/ftdbN0KK/versions/9vH5C4iF/lithium-fabric-mc1.21.1-0.13.0.jar
wget https://cdn.modrinth.com/data/nmDcB62a/versions/7qX1Q7Xn/ferritecore-6.0.1-fabric.jar
cd ..
```

---

## Konfigurasi Tambahan (PENTING)

### Mode Offline (Untuk Pemain Non-Premium/Crack)
Jika ingin mengizinkan pemain dengan launcher non-premium bergabung, edit file `server.properties`:
```properties
online-mode=false
```

### Menjalankan Server
Gunakan perintah berikut untuk menjalankan server dengan alokasi memori yang optimal:
```bash
java -Xmx8G -Xms4G -jar fabric-server-launch.jar nogui
```

---

## Panduan Sisi Client
Agar dapat terhubung ke server ini, pemain wajib:
1. Menggunakan **Fabric Loader 1.21.1**.
2. Memasang mod yang sama dengan server (terutama **Fabric API**).
3. (Opsional) Menggunakan **Iris Shaders** dan **Sodium** jika ingin menggunakan shader.

---

## Pemecahan Masalah (Troubleshooting)
- **Server Gagal Start**: Pastikan versi Java yang terpasang adalah versi 21. Cek dengan `java -version`.
- **Tidak Bisa Join**: Pastikan tunnel `playit` sedang berjalan dan statusnya aktif.
- **Lag Berlebihan**: Pastikan mod performa (Lithium, FerriteCore) sudah terpasang di folder `mods`.

---

## Referensi
- [Situs Resmi Fabric](https://fabricmc.net)
- [Modrinth (Sumber Mod)](https://modrinth.com)
- [playit.gg](https://playit.gg)

---

**Dibuat oleh Nugraa21**
[GitHub Repository](https://github.com/Nugraa21/Server-Minecraft-Fabric-1.21.1.git)

---
*Dokumentasi ini disusun secara profesional untuk memudahkan proses instalasi server Anda.*