Talora UI
A reusable UI component library built with React, TypeScript, and CSS.

Overview
Talora UI  is a small reusable component system designed to create consistent and user-friendly interfaces. It includes reusable components with customizable styles and different states.

Features
Button: Primary and Secondary variants, Loading and Disabled states.
TextField: Label, placeholder, helper text, and error message.
StatusBadge: Active, Pending, and Error status indicators.
EmptyState: Displays a friendly message when no data is available.
Design Tokens: Centralized colors, spacing, font sizes, and border radius.
Responsive Design: Layout adapts to different screen sizes.

Technologies Used
React
TypeScript
Vite
CSS
React Icons

Project Structure
src/
├── components/
│   ├── Sidebar/
│   ├── Button/
│   ├── TextField/
│   ├── StatusBadge/
│   └── EmptyState/
├── styles/
│   └── tokens.css
├── App.tsx
├── App.css
├── index.css
└── main.tsx

Installation
npm create vite@latest ./
React+TypeScript
Start the development server: npm run dev

Design System
The project uses centralized CSS variables in tokens.css to maintain consistent colors, spacing, typography, and border radius across components.

Testing

The project uses **Vitest** and **React Testing Library** for component testing.

Running Tests

Run the following command to start the test runner:

npm run build


To run tests once without watch mode:

npm run build
npm run lint

 Test Coverage

The project includes tests for all four reusable UI components:

- **Button**
  - Renders correctly.
  - Calls the onClick handler when clicked.
  - Does not trigger onClick when disabled.
  - Displays loading state and prevents interaction while loading.

- **TextField**
  - Renders the label correctly.
  - Associates the label with the input.
  - Connects helper and error messages using accessible attributes.

- **StatusBadge**
  - Displays the correct status text.

- **EmptyState**
  - Displays the title and description correctly.

 Test Results

All component tests are executed using Vitest in a jsdom environment.

