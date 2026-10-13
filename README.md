# TaskFlow - Görev ve Proje Yönetim Sistemi API

Node.js ve Express.js ile geliştirilmiş, REST API mantığında çalışan basit bir görev yönetim sistemidir. Veriler veritabanı yerine bellekte (dizi) tutulur.

## Gereksinimler

- Node.js (LTS sürümü) - https://nodejs.org

## Kurulum

1. Projeyi indirin veya klonlayın:

```
   git clone https://github.com/Diclesalhan/taskflow
   cd taskflow
```

2. Bağımlılıkları kurun:

```
   npm install
```

3. Sunucuyu başlatın:

```
   node server.js
```

4. Terminalde şu mesajı görmelisiniz:

```
   Sunucu http://localhost:3000 adresinde çalışıyor
```

## Klasör Yapısı

```
taskflow/
├── server.js                  # Sunucu ve ayarlar
├── routes/taskRoutes.js       # Endpoint yönlendirmeleri
├── controllers/taskController.js  # CRUD işlemleri
└── middleware/logger.js       # İstek kayıt (logger) middleware'i
```

## Endpoint Listesi

| İşlem | Method | Adres |
|---|---|---|
| Görev listele | GET | /tasks |
| Görev detayı | GET | /tasks/:id |
| Görev ekle | POST | /tasks |
| Görev güncelle | PUT | /tasks/:id |
| Görev sil | DELETE | /tasks/:id |

## Görev Yapısı

```json
{
  "id": 1,
  "title": "Örnek görev",
  "description": "Bu bir örnek görevdir",
  "status": "pending",
  "priority": "medium",
  "assignee": "musa"
}
```

## Örnek İstek (POST /tasks)

```json
{
  "title": "Backend projesi",
  "description": "CRUD yaz",
  "priority": "high",
  "assignee": "musa"
}
```

## Logger Middleware

Gelen her isteğin zamanı, method'u ve adresi terminale yazılır:

```
[2026-10-13T11:30:00.000Z] GET /tasks
```

## Test

Tüm endpoint'ler Postman ile test edilmiştir. Test ekran görüntüleri teslim dosyalarına eklenmiştir.