import { type PlaywrightTestConfig } from '@playwright/test';

const PORT = process.env.PORT || 3000;
const baseURL = `http://localhost:${PORT}`;

const config: PlaywrightTestConfig = {
    // Timeout per test
    timeout: 10 * 1000,

    fullyParallel: !process.env.CI,

    // If a test fails, retry it additional 2 times
    // retries: 2,

    // Run your local dev server before starting the tests:
    webServer: {
        command: 'npm run dev',
        port: 3000,
        reuseExistingServer: !process.env.CI,
    },

    use: {
        // Use baseURL so to make navigations relative.
        // More information: https://playwright.dev/docs/api/class-testoptions#test-options-base-url
        baseURL,
    },
};

export default config;
