# 🟩 MINECRAFT BEDROCK SERVER (BDS)

## 🔑 Konsep Penting (WAJIB PAHAM)

| Java Edition     | Bedrock Edition                      |
| ---------------- | ------------------------------------ |
| Fabric / Paper   | **BDS (Bedrock Dedicated Server)**   |
| Plugin / Mod     | **Addon (Behavior & Resource Pack)** |
| TCP              | **UDP**                              |
| Shader di client | Shader di client                     |
| Port 25565       | **Port 19132 (UDP)**                 |

⚠️ **Fabric / Forge / Paper TIDAK BISA untuk Bedrock**

---

## 🔥 APA YANG BISA & TIDAK BISA DI BEDROCK

### ✅ Bisa

* Server Bedrock resmi (BDS)
* Addon (behavior pack)
* Resource pack
* Online via playit.gg
* Join dari **HP / Windows / Console**

### ❌ Tidak Bisa

* Mod Java
* Fabric / Forge
* Plugin Java

---

# 🚀 SETUP BEDROCK SERVER (CODESPACES)

## 1️⃣ Update System

```bash
sudo apt update && sudo apt upgrade -y
```

---

## 2️⃣ Install Dependency

```bash
sudo apt install unzip wget -y
```

---

## 3️⃣ Download Bedrock Dedicated Server (Linux)

Masuk folder kerja:

```bash
mkdir bedrock-server
cd bedrock-server
```

Download BDS (contoh versi terbaru):

```bash
wget https://minecraft.azureedge.net/bin-linux/bedrock-server-1.21.30.03.zip
```

> ⚠️ Versi bisa berubah
> Cek resmi di: [https://www.minecraft.net/en-us/download/server/bedrock](https://www.minecraft.net/en-us/download/server/bedrock)

---

## 4️⃣ Extract Server

```bash
unzip bedrock-server-1.21.30.03.zip
```

---

## 5️⃣ Jalankan Server

```bash
chmod +x bedrock_server
./bedrock_server
```

Jika berhasil:

```
Server started.
```

---

## 6️⃣ Konfigurasi Server

Edit:

```bash
nano server.properties
```

Contoh penting:

```properties
server-name=Bedrock Codespaces
gamemode=survival
difficulty=normal
max-players=10
online-mode=true
server-port=19132
server-portv6=19133
```

---

## 7️⃣ Install playit.gg (BEDROCK = UDP)

Install:

```bash
curl -SsL https://playit-cloud.github.io/ppa/key.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/playit.gpg >/dev/null
echo "deb [signed-by=/etc/apt/trusted.gpg.d/playit.gpg] https://playit-cloud.github.io/ppa/data ./" | sudo tee /etc/apt/sources.list.d/playit-cloud.list
sudo apt update
sudo apt install playit -y
```

Jalankan:

```bash
playit
```

### Di dashboard playit.gg:

* Create tunnel
* **Protocol: UDP**
* **Local port: 19132**
* Simpan **IP + Port**

---

## 8️⃣ Cara Join Server Bedrock

### Di HP / Windows:

1. Minecraft Bedrock
2. Play → Servers → Add Server
3. Isi:

   * Server Address: `IP_playit`
   * Port: `PORT_playit`
4. Join 🎮

---

# 📦 ADDON (MOD BEDROCK)

## Struktur Folder:

```
behavior_packs/
resource_packs/
worlds/
```

### Import Addon:

1. Upload addon ke server
2. Aktifkan di world:

   * behavior pack
   * resource pack

⚠️ Tidak auto-load seperti Java mod

---

# 🎨 SHADER BEDROCK

Shader Bedrock:

* Beda dengan Java
* Biasanya `.mcpack`
* Dipasang **di client**
* Contoh:

  * ESBE
  * Parallax (Windows RTX)

---

# ⚠️ KETERBATASAN CODESPACES

* Server **tidak 24 jam**
* Bisa sleep
* Cocok:


  * Belajar
  * Testing
  * Server private
  
❌ Tidak cocok server publik besar

---

# 🧠 RINGKASAN CEPAT

| Tujuan         | Jawaban |
| -------------- | ------- |
| Bedrock server | ✅ Bisa  |
| Fabric         | ❌ Tidak |
| playit.gg      | ✅ Bisa  |
| Mod Java       | ❌ Tidak |
| Addon Bedrock  | ✅ Bisa  |
| HP join        | ✅ Bisa  |

