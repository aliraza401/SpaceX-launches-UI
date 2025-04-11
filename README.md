### SpaceX Launch Tracker

A web application that displays upcoming and past SpaceX launches using the public SpaceX API. This project was enhanced from an MVP to improve user experience and reliability.

## 🚀 Features

- **Launch Data Display**: View comprehensive information about SpaceX launches
- **Pagination**: Navigate through launch history with intuitive pagination controls
- **Responsive Design**: Optimized for both desktop and mobile viewing
- **Comprehensive Test Coverage**: Unit tests for components and core functionality

## 🛠️ Technologies Used

- **Next.js**: React framework for the frontend
- **React**: UI library
- **Jest**: Testing framework
- **CSS Modules**: For component-specific styling
- **SpaceX API**: For launch data

## 📋 Prerequisites

- Node.js (v14.x or later)
- npm or yarn

## 🔧 Installation

1. Clone the repository:

```shellscript
git clone https://github.com/aliraza401/SpaceX-launches-UI.git
cd SpaceX-launches-UI
```

2. Install dependencies:

```shellscript
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory (if not already present):

```plaintext
NEXT_PUBLIC_API_URL=https://api.spacexdata.com/v4
```

4. Start the development server:

```shellscript
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🧪 Testing

The application includes comprehensive unit tests using Jest. To run the tests:

```shellscript
npm test
# or
yarn test
```

To generate a test coverage report:

```shellscript
npm test -- --coverage
# or
yarn test --coverage
```

## 📁 Project Structure

```plaintext
SpaceX-launches-UI/
├── components/       # React components
├── constants/        # Application constants including pagination settings
├── hooks/            # Custom React hooks
├── pages/            # Next.js pages
├── public/           # Static assets
├── services/         # API service functions
├── styles/           # Global styles
├── test-utils/       # Testing utilities and mocks
│   └── mocks/        # Mock data for tests
├── utils/            # Utility functions
├── .env              # Environment variables
├── .eslintrc.json    # ESLint configuration
├── jest.config.mjs   # Jest configuration
├── next.config.js    # Next.js configuration
└── package.json      # Project dependencies and scripts
```

## ✨ Enhancements Made

### 1. Pagination Implementation

- Added pagination controls to navigate through launch history
- Implemented page size selection
- Added visual indicators for current page

### 2. Test Coverage

- Unit tests for React components
- Tests for pagination logic
- Mock API responses for consistent testing
- Tests for edge cases and error handling

### 3. UI Improvements

- Enhanced visual design
- Improved mobile responsiveness
- Better loading states
- Clearer information hierarchy

## 🌐 API

The application uses the public SpaceX API to fetch launch data. The API endpoints used include:

- `/launches` - Get all launches
- `/launches/upcoming` - Get upcoming launches
- `/launches/past` - Get past launches

## 📝 License

This project is for demonstration purposes as part of a home assignment.

## 👨‍💻 Author

Ali Raza

---

_This project was developed as part of a home assignment to enhance an existing SpaceX Launch Tracker application._
