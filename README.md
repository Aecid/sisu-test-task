
# Playwright Test Automation

This repository contains end-to-end test automation scripts for the EpicBet website using **Playwright**.

## Project Structure

- **`tests/`**: Contains all Playwright test scripts.
- **`services/`**: Contains API-related test helper classes (e.g., `MatchHotAPI`).
- **`pages/`**: Contains page object models for interacting with the web pages.
- **`utils/`**: Contains utility functions for common tasks like URL building and response validation.
- **`playwright-report/`**: Folder to store Playwright test results, including screenshots and reports.
- **`.github/`**: Contains the GitHub Actions configuration for CI/CD.

## Prerequisites

Before running the tests, make sure you have the following installed:

- **Node.js** (version 18 or later)
- **Git** (to clone the repository)

## Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd sisu-test-task
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

You can run the Playwright tests locally with the following command:

```bash
npx playwright test
```

### **Running with CI/CD**

This project uses **GitHub Actions** for CI/CD. Every push or pull request to the `main` branch will trigger the Playwright tests. You can check the results in the **"Actions" tab** on GitHub.

### **Test Reports**

After running the tests, Playwright generates an HTML report. To view the report locally, use the following command:

```bash
npx playwright show-report
```

The reports will be available in the `playwright-report` folder.

## GitHub Actions

GitHub Actions will automatically run the Playwright tests on each push to the `main` branch and on pull requests. The results will be available in the **"Actions" tab** on GitHub.

### **CI/CD Workflow:**
- **Push** to the `main` branch triggers the tests.
- **Pull Requests** to the `main` branch trigger the tests.

## Playwright Test Configuration

The Playwright test configuration is stored in `playwright.config.ts`. Key settings include:
- **Base URL**: `https://epicbet.com/`
- **Screenshots**: Captured on test failure.
- **Trace**: Captured on the first retry of a test failure.

## License

This project is licensed under the MIT License.
