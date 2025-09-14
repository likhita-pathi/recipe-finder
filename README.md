# Recipe Finder 🍳

A modern React-based web application that helps users discover delicious recipes by searching meal names. Built with React 19, React Router, and integrated with TheMealDB API for comprehensive recipe data.

## ✨ Features

- **Recipe Search**: Search for recipes by meal name using TheMealDB API
- **Recipe Details**: View comprehensive recipe information including:
  - High-quality recipe images
  - Complete ingredient lists with measurements
  - Step-by-step cooking instructions
  - Recipe category and cuisine area
  - External source links
- **Responsive Design**: Modern, mobile-friendly interface that works on all devices
- **Fast Navigation**: Client-side routing with React Router for smooth user experience
- **Clean UI**: Beautiful card-based layout with hover effects and smooth transitions

## 🚀 Demo

The application provides an intuitive search interface where users can find recipes and view detailed cooking instructions.

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Routing**: React Router DOM 6.30.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Custom CSS with modern design patterns
- **API**: TheMealDB API (free recipe database)
- **Code Quality**: ESLint for code linting

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Clone the Repository

```bash
git clone https://github.com/likhita-pathi/recipe-finder.git
cd recipe-finder
```

### Install Dependencies

```bash
npm install
```

### Environment Configuration (Optional)

Create a `.env` file in the root directory if you need to configure API settings:

```env
VITE_API_BASE="YOUR_API_KEY_HERE"
```

*Note: Currently using TheMealDB free API which doesn't require authentication.*

### Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Usage

### Searching for Recipes

1. **Enter Recipe Name**: Type the name of a dish you want to cook in the search box
2. **Click Search**: Hit the search button or press Enter
3. **Browse Results**: View recipe cards with images, titles, and categories
4. **View Details**: Click "View Recipe" to see complete cooking instructions

### Recipe Details Page

- **Ingredients List**: Complete list of ingredients with measurements
- **Instructions**: Step-by-step cooking directions
- **Recipe Info**: Category (e.g., Dessert, Main Course) and cuisine area
- **External Links**: Links to original recipe sources when available
- **Navigation**: Easy return to search results

## 📁 Project Structure

```
recipe-finder/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Form.jsx          # Search form component
│   │   ├── Recipes.jsx       # Recipe grid display
│   │   ├── Recipe.jsx        # Individual recipe details
│   │   └── Router.jsx        # Application routing
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx               # Main application component
│   ├── App.css               # Legacy styles (deprecated)
│   ├── styles.css            # Main stylesheet
│   └── main.jsx              # Application entry point
├── .env.example              # Environment variables template
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
└── eslint.config.js          # ESLint configuration
```

## 🎨 Styling

The application uses a modern CSS design system with:

- **Color Palette**: Orange accent (#ff6b35) with neutral grays
- **Typography**: Clean, readable fonts with proper hierarchy
- **Layout**: CSS Grid and Flexbox for responsive design
- **Animations**: Smooth hover effects and transitions
- **Cards**: Material design-inspired recipe cards with shadows

## 🔌 API Integration

### TheMealDB API

The application integrates with TheMealDB API endpoints:

- **Search by name**: `https://www.themealdb.com/api/json/v1/1/search.php?s={recipeName}`
- **Recipe details**: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`

### Data Processing

- Handles null responses gracefully when no recipes are found
- Extracts ingredients and measurements from API response
- Processes instruction text for display
- Manages recipe images and metadata

## 🧹 Code Quality

- **ESLint**: Configured with React hooks and refresh plugins
- **Modern JavaScript**: Uses ES6+ features and React hooks
- **Component Architecture**: Modular, reusable React components
- **Error Handling**: Proper try-catch blocks for API calls

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Adapts to medium screen sizes
- **Desktop Enhanced**: Full-featured desktop experience
- **Grid System**: CSS Grid for flexible layouts

## 🚀 Performance

- **Vite Build Tool**: Fast development and optimized production builds
- **Code Splitting**: Route-based code splitting with React Router
- **Image Optimization**: Proper image sizing and lazy loading
- **Minimal Bundle**: Efficient dependency management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Author

**Likhita Pathi**
- GitHub: [@likhita-pathi](https://github.com/likhita-pathi)

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for providing the free recipe API
- [React Team](https://react.dev/) for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool

## 📞 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/likhita-pathi/recipe-finder/issues) on GitHub.

---

⭐ **Star this repository if you found it helpful!**
