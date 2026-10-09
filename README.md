# Program 18 – Build a Calculator App Using React

## Aim

To develop a calculator application using React and the `useState` Hook.

## Problem Statement

Create a calculator that performs basic arithmetic operations and displays the result.

## Requirements

1. Perform addition, subtraction, multiplication, and division.
2. Support decimal numbers.
3. Clear the current input using the `C` button.
4. Delete the last entered character using `DEL`.
5. Display the result using the `=` button.
6. Handle division by zero without crashing.
7. Use React functional components and state management.

## Technologies Used

* React
* JavaScript
* HTML
* CSS
* GitHub
* GitHub Actions
* GitHub Pages

## Project Structure

```text
src/
├── App.js
├── App.test.js
├── index.js
└── index.css

public/
└── index.html

.github/
└── workflows/
    ├── autograding.yml
    └── deploy.yml
```

## Instructions

1. Open the assigned GitHub repository.

2. Clone the repository or open it in the assigned development environment.

3. Install dependencies:

   ```bash
   npm install
   ```

4. Complete the TODO sections in `src/App.js`.

5. Implement the calculator operations and event handlers.

6. Run the application:

   ```bash
   npm start
   ```

7. Run the automated tests:

   ```bash
   npm test
   ```

8. Build the application:

   ```bash
   npm run build
   ```

9. Commit and push the completed work to GitHub.

## Expected Output

The application should display a calculator with:

* A display area
* Number buttons from 0 to 9
* Decimal point
* Addition, subtraction, multiplication, and division buttons
* Clear and delete buttons
* An equals button

The display must update when the user presses the buttons.

## Automated Evaluation

GitHub Actions checks the required files, runs the test cases, and builds the application.

Students should verify that the workflow completes successfully before submission.

## GitHub Pages Deployment

Set the repository's Pages source to **GitHub Actions** under:

`Settings → Pages → Build and deployment`

After successful deployment, the website will be available at:

`https://<username>.github.io/<repository-name>/`

Replace the placeholders with the student's GitHub username and repository name.

## Submission

Submit the following:

1. GitHub repository URL
2. Live GitHub Pages URL
3. Successful GitHub Actions workflow

## Evaluation – 10 Marks

| Criteria                              |  Marks |
| ------------------------------------- | -----: |
| React state and event handling        |      2 |
| Arithmetic operations                 |      3 |
| Clear, delete, and decimal operations |      2 |
| Division-by-zero handling             |      1 |
| Automated testing and build           |      1 |
| GitHub Actions and deployment         |      1 |
| **Total**                             | **10** |

## Student Checklist

* [ ] Calculator interface is displayed.
* [ ] Addition works correctly.
* [ ] Subtraction works correctly.
* [ ] Multiplication works correctly.
* [ ] Division works correctly.
* [ ] Decimal input works.
* [ ] Clear and delete work.
* [ ] Division by zero is handled.
* [ ] Automated tests pass.
* [ ] Production build succeeds.
* [ ] GitHub Pages deployment works.
