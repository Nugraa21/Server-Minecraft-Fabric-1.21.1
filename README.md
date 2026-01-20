# Server-Minecraft-Fabric-1.21.1
### GitHub Codespaces • playit.gg • Mod Ready • Shader Ready

Repository ini berisi **panduan lengkap dari nol** untuk menjalankan **Minecraft Fabric Server versi 1.21.1** menggunakan **GitHub Codespaces** sebagai server dan **playit.gg** sebagai tunneling agar server bisa online tanpa port forwarding.

---

## 📌 Fitur Utama
- ✅ Minecraft **Fabric Server 1.21.1**
- ✅ Jalan di **GitHub Codespaces**
- ✅ Online tanpa VPS (pakai **playit.gg**)
- ✅ Support **MOD Fabric**
- ✅ Support **Shader (Client-side)**
- ✅ Cocok untuk belajar, testing, dan server private

---

## 📂 Struktur Folder
```

fabric-1.21.1/
├── fabric-server-launch.jar
├── mods/
│   ├── fabric-api.jar
│   ├── lithium.jar
│   ├── ferrite-core.jar
├── config/
├── world/
├── eula.txt
└── server.properties

````

---

## 🧰 Kebutuhan Sistem
- GitHub Account
- GitHub Codespaces aktif
- Java **21**
- Akun **playit.gg**
- Minecraft Java Edition

---

## 1️⃣ Update System
```bash
sudo apt update && sudo apt upgrade -y
````

---

## 2️⃣ Install Java 21 (WAJIB)

Minecraft 1.21.x **harus Java 21**

```bash
sudo apt install openjdk-21-jdk -y
java -version
```

Pastikan output:

```
openjdk version "21"
```

---

## 3️⃣ Buat Folder Server

```bash
mkdir fabric-1.21.1
cd fabric-1.21.1
```

---

## 4️⃣ Download Fabric Installer

```bash
wget https://maven.fabricmc.net/net/fabricmc/fabric-installer/1.0.1/fabric-installer-1.0.1.jar
```

---

## 5️⃣ Install Fabric Server 1.21.1

```bash
java -jar fabric-installer-1.0.1.jar server -mcversion 1.21.1 -downloadMinecraft
```

Jika berhasil, akan muncul:

* `fabric-server-launch.jar`
* Folder `mods/`

---

## 6️⃣ Jalankan Server Pertama Kali

```bash
java -Xmx8G -Xms4G -jar fabric-server-launch.jar nogui
```

Stop server:

```
CTRL + C
```

---

## 7️⃣ Setujui EULA

```bash
nano eula.txt
```

Ubah:

```
eula=true
```

Simpan:

```
CTRL + O → ENTER
CTRL + X
```

---

## 8️⃣ Jalankan Server Normal

```bash
java -Xmx8G -Xms4G -jar fabric-server-launch.jar nogui
```

🎉 **Fabric Server berhasil dijalankan**

---

## 9️⃣ Install playit.gg (Biar Server Online)

```bash
curl -SsL https://playit-cloud.github.io/ppa/key.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/playit.gpg >/dev/null
echo "deb [signed-by=/etc/apt/trusted.gpg.d/playit.gpg] https://playit-cloud.github.io/ppa/data ./" | sudo tee /etc/apt/sources.list.d/playit-cloud.list
sudo apt update
sudo apt install playit -y
```

Jalankan playit:

```bash
playit
```

Langkah di web playit.gg:

1. Login
2. Buat **Minecraft TCP Tunnel**
3. Port: `25565`
4. Gunakan **IP & Port dari playit** untuk masuk server

---

## 🔟 Menambahkan MOD Fabric (Server)

Masuk ke folder mod:

```bash
cd mods
```

### Wajib: Fabric API

```bash
wget https://cdn.modrinth.com/data/P7dR8mSH/versions/bu0Zp0g1/fabric-api-0.102.0+1.21.1.jar
```

### Mod Performa (Opsional)

```bash
wget https://cdn.modrinth.com/data/ftdbN0KK/versions/9vH5C4iF/lithium-fabric-mc1.21.1-0.13.0.jar
wget https://cdn.modrinth.com/data/nmDcB62a/versions/7qX1Q7Xn/ferritecore-6.0.1-fabric.jar
```

Restart server:

```bash
cd ..
java -Xmx8G -Xms4G -jar fabric-server-launch.jar nogui
```

---

## 📦 Import MOD dari Local

Cara termudah:

1. Upload file `.jar` ke folder `mods/`
2. Pastikan:

   * Fabric
   * Versi **1.21.1**
3. Restart server

---

## 💻 Setup CLIENT (WAJIB)

Player harus:

* Install **Fabric Loader 1.21.1**
* Install **mod yang sama** dengan server
* Masuk server pakai IP playit.gg

❌ Vanilla client tidak bisa masuk

---

## 🎨 Shader (Client-Side)

Shader **TIDAK di server**

Client install:

* Fabric Loader
* **Iris Shaders**
* **Sodium**

Masukkan shader ke:

```
.minecraft/shaderpacks/
```

Shader populer:

* Complementary
* BSL
* SEUS

---

## ⚠️ Troubleshooting

* ❌ Server crash → cek `logs/latest.log`
* ❌ Tidak bisa join → versi mod beda
* ❌ Mod tidak kebaca → bukan Fabric / salah versi

---

## 📚 Referensi

* [https://fabricmc.net](https://fabricmc.net)
* [https://modrinth.com](https://modrinth.com)
* [https://playit.gg](https://playit.gg)

---

## 👤 Author

**Nugraa21**
Minecraft Fabric Server • GitHub Codespaces



⭐ Jangan lupa **Star repo ini** kalau bermanfaat!

