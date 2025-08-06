# 🖌️ Stateless 2D Canvas Editor

A web-based 2D canvas editor built using **React**, **Fabric.js**, and **Firebase Firestore**. It allows users to draw, manipulate objects, and share their canvas state through a URL-based scene ID. The editor is **stateless** on the client side—canvas data is persisted in Firestore and rehydrated via URL.

---

## 🚀 Live Demo

🔗 [View Live Application](https://your-live-demo-link.com)

---

## 📹 Video Demo

🎥 [Watch Project Walkthrough](https://your-video-link.com)

---

## 📂 Repository

🔗 [GitHub Repository](https://github.com/your-username/canvas-editor)

---

## 📌 Features

- 🎨 Draw basic shapes: Circle, Rectangle, Line, Free Draw
- 💾 Autosave canvas to Firestore (on change)
- 🔗 Shareable scenes via URL (`/canvas/:id`)
- 🪄 Real-time canvas rehydration on open
- 🧰 Responsive and intuitive UI
- 🧼 Stateless client (all state in Firestore)

---

## ⚙️ Tech Stack

- **Frontend**: React + Tailwind CSS
- **Canvas Engine**: Fabric.js
- **Backend / Storage**: Firebase Firestore
- **Deployment**: Firebase Hosting / Vercel

---

## 🔄 Flow Overview

1. On visiting `/canvas/:id`, the app fetches the canvas data from Firestore.
2. Canvas is initialized using Fabric.js and hydrated with saved objects.
3. User interactions (draw, move, add) fire change events.
4. Canvas state is **autosaved** to Firestore using a debounced listener.
5. Share button copies the live scene URL to clipboard.

---

## ⚖️ Trade-offs Made

| Trade-off | Reason |
|----------|--------|
| Used Firestore instead of localStorage or a full backend | Firestore offers real-time sync and simple integration without managing backend infra. |
| Stateless client | Reduces complexity and ensures persistence across devices without login. |
| No authentication | Kept app anonymous and simple to focus on core features. |
| No real-time collaboration | Prioritized saving/sharing over multi-user editing due to time constraints. |

---

## 💎 Bonus Features

- ✅ Canvas auto-resizes with window
- ✅ Debounced save to reduce Firestore writes
- ✅ Scene cleanup on component unmount
- ✅ Modular component & hook structure (`useCanvasAutosave`, `CanvasEditor`, etc.)
- ✅ Firebase config stored securely using `.env`

---

## 📁 Folder Structure
src/
├── assets/
├── components/
│ ├── CanvasEditor.jsx
│ ├── Toolbar.jsx
│ └── ShareButton.jsx
├── hooks/
│ └── useCanvasAutosave.js
├── firebase/
│ └── config.js
├── pages/
│ ├── CanvasPage.jsx
│ └── Home.jsx
├── App.jsx
├── index.js
├── config.js


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
