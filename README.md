# Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and transitions
- 🌈 Gradient color scheme
- 🔍 Smooth scrolling navigation
- 📧 Contact form
- 💼 Projects showcase
- 🛠️ Skills section with progress bars

## Technologies Used

- React 18
- Vite
- React Icons
- CSS3 (Custom animations and styling)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Home Section** (`src/components/Home.jsx`):
   - Update name, title, and description
   - Replace social media links
   - Add your profile image

2. **About Section** (`src/components/About.jsx`):
   - Update your bio and statistics

3. **Skills Section** (`src/components/Skills.jsx`):
   - Modify skill categories and proficiency levels
   - Add or remove skills

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace project data with your own projects
   - Update project images, links, and descriptions

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Configure form submission (currently logs to console)

### Styling

- Color scheme can be modified in `src/index.css` (CSS variables)
- Component-specific styles are in their respective CSS files
- Global styles and animations are in `src/App.css`

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and customize it for your own portfolio!

