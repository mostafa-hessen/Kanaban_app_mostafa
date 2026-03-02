# 📋 Kanban Task Manager

A professional, feature-rich Kanban board application built with modern web technologies as part of a Frontend Developer Assessment. This project demonstrates best practices in React/Next.js development, including state management, asynchronous data fetching, and an intuitive UI/UX.

---

## 📸 Screenshots

### 🌗 Light Mode

![Kanban Light Mode](./public/screenshots/light_mode.png)

### 🌑 Dark Mode

![Kanban Dark Mode](./public/screenshots/dark_mode.png)

---

## ✨ Features

- **4-Column Workflow**: Efficiently manage tasks through `To Do`, `In Progress`, `In Review`, and `Done` states.
- **Full CRUD Support**: Seamlessly Create, Read, Update, and Delete tasks.
- **Drag-and-Drop (D&D)**: Intuitively move tasks between columns with a smooth drag-and-drop interface powered by `@dnd-kit`.
- **Pagination & Search**: Handle large task lists with column-level pagination and a powerful search bar to filter by title or description.
- **Responsive Theme**: Supports both Dark and Light modes for a comfortable user experience in any environment.
- **Caching & Optimistic Updates**: Leveraging React Query for efficient data fetching, caching, and state synchronization with a mock backend.

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) / [React](https://reactjs.org/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [React Query (TanStack Query)](https://tanstack.com/query/latest)
- **UI Components**: [Material UI (MUI)](https://mui.com/)
- **Drag and Drop**: [@dnd-kit](https://dndkit.com/)
- **Backend Mocking**: [json-server](https://github.com/typicode/json-server)

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 1. Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### 2. Run the Mock API

This project uses `json-server` to mock a backend database. Open a separate terminal and run:

```bash
# If json-server is not installed globally
npx json-server ./database/db.json --port 4000

# OR if you have it globally
json-server --watch ./database/db.json --port 4000
```

_The API will be accessible at: `http://localhost:4000/tasks`_

### 3. Start the Development Server

Install dependencies then run the application:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port specified in your terminal) to view the application in your browser.

---

## 📂 Project Structure

The project follows a **Feature-Based Architecture**, ensuring scalability and maintainability:

```text
src/
├── app/               # Application configuration and providers
├── features/          # Core features (Kanban, etc.)
│   └── kanban/        # Kanban board components, hooks, and types
├── shared/            # Shared utilities and state (Zustand stores)
├── layout/            # Layout components (NavBar, AppShell)
└── database/          # db.json for json-server
```

---

## 📚 References & Inspiration

This project was built with insights and best practices from the following resources:

### 📖 Documentation

- [TanStack Query Documentation](https://tanstack.com/query/v4/docs/framework/react/quick-start)
- [MUI (Material UI) Documentation](https://mui.com/material-ui/)
- [dnd-kit Documentation](https://dndkit.com/overview)

### 🎓 Educational Resources

- [MUI & React - Level 1 (ITI Course)](https://mostafa-hessen.github.io/courses/MUI_React/Day1_MUI.html)
- [MUI & React - Level 2 (ITI Course)](https://mostafa-hessen.github.io/courses/MUI_React/Day2_MUI.html)
- [Kanban Board Architecture Guide 1](https://youtu.be/xyxrB2Aa7KE?si=Z6ZIH06EEyJ_0_92)
- [Kanban Board Architecture Guide 2](https://youtu.be/QhSXNY8sy_0?si=HG-mfpJ5P5r8e5Nn)
- [React Query Mastery Guide](https://youtu.be/novnyCaa7To?si=90YDh_Zsh5slpFx-)
- [Drag and Drop Implementation Guide](https://www.youtube.com/watch?v=DVqVQwg_6_4)

---

## 👨‍💻 Submission Notes

- Source code is clearly structured within the `src/` directory.
- All core requirements (4 columns, D&D, Search, Pagination, React Query) have been implemented.
- Comments are provided in the source code where necessary for complex logic.
- Managed by Mostafa Hessen.

---

## 🇪🇬 ملخص المشروع (باللغة العربية)

هذا المشروع هو عبارة عن لوحة **Kanban** احترافية لإدارة المهام، تم تطويرها كجزء من تقييم مطور واجهات أمامية (Frontend Developer Assessment).

### أهم المميزات:

- **نظام الأعمدة الأربعة**: (To Do, In Progress, In Review, Done).
- **السحب والإفلات**: تحريك المهام بين الأعمدة بسلاسة تامة.
- **البحث والترقيم**: إمكانية البحث عن المهام وتقسيمها لصفحات داخل كل عمود.
- **دعم الوضع الليلي والنهاري**: واجهة مستخدم متجاوبة وعصرية تدعم الـ Dark & Light Mode.
- **إدارة البيانات**: استخدام React Query لعمل Caching وضمان سرعة الأداء.

تم الاعتماد في هذا المشروع على أفضل الممارسات في هيكلة الكود (Feature-Based Architecture) لضمان سهولة التطوير والصيانة في المستقبل.
