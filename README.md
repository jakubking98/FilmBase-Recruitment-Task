# FilmBase-Recruitment-Task

## 1. Description

**FilmBase** is an application that allows users to browse movies using the [The Movie Database (TMDb)](https://api.themoviedb.org/3) API. The app enables searching, sorting by category, and filtering by production year and rating. Additionally, users can add movies to their favorites, which are stored in `localStorage`. When a movie is clicked, detailed information is displayed—including title, production date, categories, cast, and a link to the trailer.

## Live Demo:  
[FilmBase on Vercel](https://film-base-recruitment-task.vercel.app/)

## Screenshots

### Home Page Header
![image](https://github.com/user-attachments/assets/4d84ffa4-ae5e-4991-b50c-9982ff39dfd8)

### Home Page Film Search
![image](https://github.com/user-attachments/assets/5ddc1a8e-7ea7-4b45-ae0b-6cf67564e42a)

### Movie Details
![image](https://github.com/user-attachments/assets/9a982916-f4cc-405b-b5f5-c8ad9a0086af)

### Movie Details trailer
![image](https://github.com/user-attachments/assets/e22be3e3-99b1-415c-80f9-fc2ac61ef0cf)

### Favorites List
![image](https://github.com/user-attachments/assets/86a3bcdd-7214-4809-b114-0cf0894fcc10)


---

## 2. Functionalities

### 🎬 Browse Movies
- **Fetching Movies:**  
  Retrieves movies from the TMDb API, including posters, descriptions, cast, and other details.
- **Filtering:**  
  Allows filtering movies by selected categories, production year, and rating.
- **Sorting:**  
  Users can sort movies based on criteria such as title, release date, or rating.
- **Searching:**  
  Enables users to search for movies by name or keyword.

### ⭐ Favorites List
- **Add to Favorites:**  
  Users can add a movie to their favorites list, which is stored locally in `localStorage`.

### 🎥 Movie Details
- **Detailed View:**  
  Clicking on a movie shows comprehensive details like description, categories, cast, production date, and a trailer link.

### 🌀 User Interface & Animations
- **Dynamic Layout:**  
  Components such as **MovieCarousel** display movies in a responsive slider format, allowing smooth navigation through the available movies.
- **Responsive Design:**  
  The application adapts its layout for different screen sizes using Material UI and Swiper configurations.

#### Example Components:
- **HeaderBackground:**  
  Renders a dynamic header background with a configurable image.
- **MovieCarousel:**  
  Displays a responsive carousel of movies with active slide highlighting and clickable functionality.
- **MovieCard:**  
  (Assumed) Renders the basic movie details within the carousel.

---

## 3. Technologies & Tools

### Frameworks & Libraries:
- **Next.js** and **React** – Core technologies for building the user interface.
- **Material UI** and **Material Icons** – For UI components and styling.
- **Swiper** – Implements the movie carousel for dynamic and responsive layouts.
- **TypeScript** – Provides static type checking to enhance code quality.

### Development Tools:
- **ESLint** and **Prettier** – For code linting and formatting.

---

## 4. Running the Project

### System Requirements:
- **Node.js:**  
  Recommended LTS version (e.g., Node 18 or Node 20) is required.
- **npm** (or yarn):  
  npm comes bundled with Node.js.
- **Git:**  
  To clone the repository.
- **Text Editor/IDE:**  
  VS Code is recommended.

### Installation Steps:

1. Clone the repository:
  ```bash
 git clone <repository_url>
   cd <project_directory>
```

2. Install dependencies:
  ```bash
  npm install
  ```

3. Run the development server:
  ```bash
  npm run dev
  ```

## 5. Additional Information

### External API Integration
- **TMDb API:**  
  The application fetches movie data (posters, descriptions, cast, etc.) from TMDb.  
  **Configuration:**  
  Create a `.env` file in the project root and add your API key (e.g., `REACT_APP_API_KEY`) along with any other necessary environment variables.

### Responsiveness
- The app is designed to be fully responsive.  
  Components adjust dynamically based on screen size using responsive configurations in Material UI and Swiper.

### Special Configuration
- **Environment Variables:**  
  For API keys and other settings, ensure that you set up a `.env` file in the project's root.
