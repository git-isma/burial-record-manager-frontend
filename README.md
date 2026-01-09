# Burial Record Management System - Frontend

A modern, responsive web application for managing burial records, built with React and Vite. This system provides a comprehensive interface for data entry, record verification, reporting, and administrative tasks.

## 🚀 Teck Stack

- **Core:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Styled Components](https://styled-components.com/) (with Dark Mode support)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Utilities:**
  - [Axios](https://axios-http.com/) for API requests
  - [jsPDF](https://github.com/parallax/jsPDF) & [jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable) for PDF generation
  - [XLSX](https://github.com/SheetJS/sheetjs) for Excel exports
  - [html2canvas](https://html2canvas.hertzen.com/) for screenshot-based captures

## ✨ Key Features

- **📊 Comprehensive Dashboard:** Responsive statistics cards and interactive charts for data visualization.
- **📥 Data Capture:** Advanced form for burial record entry with drag-and-drop file uploads.
- **🔍 Record Management:** Powerful search and filter capabilities for viewing and managing burial history.
- **✅ Verification Workflow:** Dedicated interface for administrators to review and verify public record submissions.
- **📈 Customizable Reports:** Generate and export reports in PDF and Excel formats.
- **🌓 Dark Mode:** Full support for dark and light themes with smooth transitions.
- **📱 Fully Responsive:** Mobile-first design optimized for phones, tablets, and desktops.
- **👤 Profile Management:** User settings, avatar uploads, and password management.
- **🔐 Role-Based Access:** UI elements and routes tailored to user roles (Admin, Data Entry, etc.).

## 🛠️ Project Structure

```text
src/
├── components/         # Reusable UI components
├── contexts/           # React Contexts (Theme, Toast, etc.)
├── pages/              # Page components
├── services/           # API services (Axios instances)
├── styles/             # Global styles, themes, and page-specific styled-components
│   ├── pages/         # Page-specific style files
│   ├── theme.js       # Design system tokens
│   └── GlobalStyles.js
├── utils/              # Helper functions and constants
└── App.jsx             # Main application component
```

## ⚙️ Setup and Installation

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env.dev` or `.env.prod` file in the root directory (refer to `.env.example` if available):
```env
VITE_API_URL=http://your-api-endpoint/api
```

### Running the Application
- **Development Mode:**
  ```bash
  npm run dev
  ```
- **Production Mode (Local Preview):**
  ```bash
  npm run prod
  ```
- **Build for Production:**
  ```bash
  npm run build:prod
  ```

## 📱 Responsiveness Breakpoints

- **Mobile:** `< 640px`
- **Tablet:** `640px - 1023px`
- **Desktop:** `≥ 1024px`

## 📄 License
Private Project. All rights reserved.
