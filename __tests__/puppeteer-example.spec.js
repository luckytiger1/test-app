const puppeteer = require("puppeteer");

describe("jest-image-snapshot usage with an image received from puppeteer", () => {
    let browser;

    beforeAll(async () => {
        browser = await puppeteer.launch();
    });

    it("renders correctly", async () => {
        const page = await browser.newPage();
        await page.goto("https://localhost:3000");
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });

    afterAll(async () => {
        await browser.close();
    });
});
