Talora UI Kit

A reusable UI component library built with React, TypeScript, and CSS.

 Overview

Talora UI Kit is a small reusable component system designed to create consistent and user-friendly interfaces. It provides reusable components with customizable styles, different states, and accessible interactions.

 Features

- **Button:** Primary and Secondary variants, Loading and Disabled states.
- **TextField:** Label, placeholder, helper text, error message, and disabled state.
- **StatusBadge:** Active, Pending, and Error status indicators.
- **EmptyState:** Displays a friendly message when no data is available, with customizable icons.
- **Design Tokens:** Centralized colors, spacing, font sizes, and border radius.
- **Responsive Design:** Layout adapts to different screen sizes.
- **Accessibility:** Label associations, ARIA attributes, and keyboard navigation.

 Technologies Used

- React
- TypeScript
- Vite
- CSS
- React Icons
- Vitest
- React Testing Library
- jsdom

 Project Structure


src/
├── components/
│   ├── Sidebar/
│   │   ├── Sidebar.tsx
│   |── Button.tsx
│   │   └── Button.test.tsx
│   ├── TextField.tsx
│   │   └── TextField.test.tsx
│   ├── StatusBadge.tsx
│   │   └── StatusBadge.test.tsx
│   ├── EmptyState.tsx
│       └── EmptyState.test.tsx
│   └── tokens.css
├── setupTests.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx

index.html
package.json
vite.config.ts
README.md


Install dependencies:

npm install


Start the development server:

npm run dev


 Design System

The project uses centralized CSS variables in `tokens.css` to maintain consistent colors, spacing, typography, and border radius across components.

These design tokens make it easier to maintain and customize the visual appearance of the UI components.

 Testing

The project uses **Vitest** and **React Testing Library** for component testing in a jsdom environment.

 Running Tests

Run all tests:

npm test


Run tests once without watch mode:

npm test -- --run

 Test Coverage

The project includes tests for all four reusable UI components.

**Button**
- Renders correctly.
- Calls the onClick handler when clicked.
- Does not trigger onClick when disabled.
- Displays loading state and prevents interaction while loading.

**TextField**
- Renders the label correctly.
- Associates the label with the input.
- Connects helper and error messages using accessible attributes.

**StatusBadge**
- Displays the correct status text.

**EmptyState**
- Displays the title and description correctly.

 Test Results

Test framework: Vitest

Test environment: jsdom

Total tests: [Insert actual test count]

Passed: [Insert actual passed count]

Failed: [Insert actual failed count]

Test screenshot:

![Test Results](screenshots/tests.png)

 Build

To create a production build, run:

npm run build


 Screenshots

Project screenshots are available in the `images/` directory.

- Desktop view
- Mobile view
- Button component states
- Test results

Conclusion & Limitations

Talora UI Kit demonstrates how reusable UI components can be developed using React and TypeScript. The project focuses on component reusability, consistent styling, responsive design, and accessibility. Each component supports different states and can be reused in other React applications. The current version is a demonstration component library and does not include a published npm package or Storybook documentation.

