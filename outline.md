# Binge Social Media Platform - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html          # Landing page with hero section
├── about.html          # About us page with diversity algorithm explanation
├── get-started.html    # User/creator selection page
├── login.html          # Login page with Google and email options
├── user-home.html      # User dashboard with circular menu
├── main.js             # Main JavaScript functionality
├── resources/          # Images and assets folder
│   ├── hero-image.png  # Generated hero image
│   └── (other assets)
├── design.md           # Design guide documentation
└── outline.md          # This project outline
```

## Page Breakdown

### 1. index.html - Landing Page
- **Navigation Bar**: About Us, Get Started links
- **Hero Section**: 
  - Generated hero image background
  - Typewriter animation: "Welcome to Binge"
  - Subtitle about diversity and healthy engagement
  - Call-to-action button to Get Started
- **Features Preview**: Brief overview of diversity algorithm
- **Footer**: Copyright and basic info

### 2. about.html - About Us Page
- **Navigation Bar**: Consistent across all pages
- **Hero Section**: About Binge title with animation
- **Content Sections**:
  - What makes Binge different
  - Diversity algorithm explanation
  - Echo chamber elimination
  - Bing token rewards system
  - Benefits for users and creators
- **Visual Elements**: Icons and illustrations for each concept

### 3. get-started.html - Get Started Page
- **Navigation Bar**: Standard navigation
- **Selection Interface**:
  - Two cards: User vs Creator
  - Hover effects and animations
  - Clear descriptions for each option
- **Information**: What each role entails

### 4. login.html - Login Page
- **Navigation Bar**: Standard navigation
- **Login Form**:
  - User type selection (from previous page)
  - Google login button (mock)
  - Email login form
  - Demo credentials hint (Arun/1234)
- **Background**: Subtle animation effects

### 5. user-home.html - User Dashboard
- **Navigation Bar**: Standard navigation
- **Circular Menu**:
  - Semi-circle design with 4 options
  - Home, Feed, Wallet, Your words voice matter
  - Animated diversity score gauge in center
  - "What's your score?" label
- **Dashboard Content**: Welcome message and basic stats

## Interactive Components

### 1. Diversity Score Gauge
- **Technology**: ECharts.js
- **Design**: Speedometer-style gauge
- **Animation**: Smooth needle movement
- **Data**: Mock diversity score (e.g., 75/100)

### 2. Circular Navigation Menu
- **Design**: Semi-circle with 4 options
- **Animation**: Smooth rotation and hover effects
- **Functionality**: Navigate to different sections
- **Center Element**: Diversity score display

### 3. Typewriter Text Animation
- **Technology**: Typed.js
- **Usage**: Hero section titles
- **Effect**: Character-by-character reveal
- **Customization**: Speed and cursor style

### 4. Particle Background
- **Technology**: Pixi.js
- **Effect**: Subtle floating particles
- **Color**: Purple and blue tones
- **Interaction**: Mouse movement response

## Technical Implementation

### JavaScript Libraries
- Anime.js: Button animations, page transitions
- ECharts.js: Diversity score gauge
- Pixi.js: Background particle effects
- Typed.js: Text animations
- Splitting.js: Text reveal effects

### CSS Framework
- Tailwind CSS: Utility-first styling
- Custom CSS: Specific animations and effects
- Responsive design: Mobile-first approach

### Color Scheme
- Primary: #2a0a3d (Deep purple)
- Lighter shade: #4a1a6d (Text and accents)
- Background: #0a0a0a (Dark)
- Text: #ffffff (White)
- Accent: #6b46c1 (Bright purple)

## User Flow
1. **Landing Page** → Learn about Binge
2. **About Page** → Understand diversity algorithm
3. **Get Started** → Choose user/creator role
4. **Login Page** → Authenticate (demo: Arun/1234)
5. **User Dashboard** → Access circular menu and diversity score