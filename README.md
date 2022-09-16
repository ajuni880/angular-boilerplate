# Angular Boilerplate


## Features

- Easy folder structure to follow
- Lazy loading
- Standalone components
- Linting (eslint)
- Import/order plugin to order imports
- Styles following the SMACSS methdology
- Husky with pre git commit hook
- Analyze your bundles with webpack bundle analyzer

## Structure

```txt
app
├── common - Contains all the shared code that is used across all the app. Without containing any components, pipes, directives.
├── views - Contains lazy-loaded modules
│     └── <ModuleName>
│           ├── pages – The different views that are rendered in this specific module route
│           └── services – Services for providing the necessary logic to the components
├── core - it is imported and should be imported once in the app module. Contains the pipes, directives, services, validators,configuration loaders
├── components - ui reusable components
├── assets – Static public contents like images, fonts, etc.
├── environments – Contains the different configurations for each environment
└── styles – Contains all the styles for the app
```

## Commands


analyze: Analyze your bundle stats
<br><br>
build: Build application
<br><br>
lint: Lint the code
<br><br>
lint:fix: Fix linting errors
<br><br>
start: Run the application for local development
<br><br>
test: Run tests
