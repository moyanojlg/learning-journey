# Task Manager

Interactive to-do list built with vanilla HTML, CSS and JavaScript. Tasks can be created with a priority level and a deadline, marked as completed, or deleted. Basic statistics (total, completed, pending) are updated in real time.

## Demo

Open `index.html` in your browser, or use a live server extension for auto-reload during development.

## Features

- Add tasks with a name, priority level (Urgent, Important, Low Priority) and deadline.
- Mark tasks as completed.
- Delete tasks.
- Live statistics: total, completed and pending tasks.
- Priority is shown visually through a colored left border on each task.
- Responsive layout for small screens.

## Project structure

```
.
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Tech stack

- HTML5
- CSS3 (custom properties, Flexbox)
- JavaScript (DOM manipulation, no frameworks or dependencies)

## Getting started

1. Clone the repository:
   ```
   git clone https://github.com/moyanojlg/learning-journey/01-javascript/01-fundamentals.git
   ```
2. Open the project folder.
3. Open `index.html` directly in a browser, or serve it locally, for example:
   ```
   npx serve .
   ```

No build step or dependencies are required.

## Possible improvements

- Persist tasks with `localStorage`.
- Sort or filter tasks by priority, deadline or status.
- Edit an existing task instead of only deleting it.
- Form validation feedback in the UI instead of `alert()`.

## License

This project is open source and available under the MIT License.

