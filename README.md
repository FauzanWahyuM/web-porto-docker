# 🚀 Portofolio Fauzan Wahyu Mubarak

[![Website](https://img.shields.io/badge/🌐_Live_Website-0078D4?style=for-the-badge)](http://128.85.33.49:8080)
[![Docker](https://img.shields.io/badge/Docker-Container-2496ED?style=for-the-badge&logo=docker)](https://ghcr.io/FauzanWahyuM/web-portofolio)

Portofolio profesional yang menampilkan karya, keterampilan, dan pengalaman saya sebagai **Software Engineer**. Dibangun dengan stack modern dan dideploy secara otomatis menggunakan CI/CD.

---

## ✨ Fitur Utama

| Kategori       | Deskripsi                                                                 |
|----------------|---------------------------------------------------------------------------|
| **Responsive**  | Tampilan optimal di desktop, tablet, dan mobile                          |
| **Performant**  | Load cepat berkat optimasi asset dan lazy loading                        |
| **Modern UI**   | Desain bersih dengan animasi mikro interaktif                            |
| **CI/CD**       | Deploy otomatis ke Azure VM via GitHub Actions                           |
| **Containerized**| Siap produksi dengan Docker                                              |

---

## 🛠 Tech Stack

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

### DevOps
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?logo=microsoft-azure&logoColor=white)

---

## 🏃‍♂️ Menjalankan Proyek

### 🔧 Lokal Development
```bash
# 1. Clone repositori
git clone https://github.com/FauzanWahyuM/Web-Portofolio.git
cd Web-Portofolio

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

### 🐳 Dengan Docker
```bash
# Build image
docker build -t web-portfolio .

# Jalankan container
docker run -dp 8080:80 web-portfolio
```
Akses di: http://localhost:8080

---

## ⚙️ CI/CD Pipeline

Proyek ini menggunakan GitHub Actions untuk alur otomatis:
```mermaid
graph LR
    A[Push ke main] --> B[Build Docker Image]
    B --> C[Push ke GHCR]
    C --> D[Deploy ke Azure VM]
```

**Detail Workflow**:
- Trigger: Push/Pull Request ke branch `main`
- Langkah:
  1. Build Docker image
  2. Push ke GitHub Container Registry (GHCR)
  3. SSH ke Azure VM untuk update container

---

## 🌐 Deployment

Situs ini dideploy di **Azure Virtual Machine** dengan konfigurasi:
- OS: Ubuntu Server 22.04 LTS
- Port: 80 (HTTP)
- Reverse Proxy: Nginx

---

## 📬 Kontak

| Platform       | Link                                                                 |
|----------------|----------------------------------------------------------------------|
| 📧 Email       | [fauzanwahyumubarak@gmail.com](mailto:fauzanwahyumubarak@gmail.com) |
| 💼 LinkedIn   | [Fauzan Wahyu Mubarak](https://linkedin.com/in/your-profile)        |
| 🐱 GitHub     | [@FauzanWahyuM](https://github.com/FauzanWahyuM)                    |

---

Dibangun dengan ❤️ oleh Fauzan Wahyu Mubarak | © 2025


