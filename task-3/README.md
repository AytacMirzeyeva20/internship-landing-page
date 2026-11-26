Task 3- Application Dashboard

A React and TypeScript dashboard for coordinators to monitor
internship applications using a mock API.

Features
- Display total applications count
- Show pending, approved, and rejected applications
- Display latest applications in a table
- Handle loading and empty states
- Handle API errors (401 and 500)
- Refresh application data
- Prevent duplicate API requests

Technologies Used
- React
- TypeScript
- Vite
- CSS
- Vitest
- React Testing Library
- JavaScript
- Mock API



Installation

Start - npm create vite@latest ./
Start the development server: npm run dev

Testing

The project uses Vitest and React Testing Library.
npm run test:run
npm run build
npm run lint

Test coverage
-Successful API response
-Empty applications list
-401 Unauthorized error
-500 Internal Server Error
-Refresh button functionality
-Loading state