const puppeteer = require("puppeteer");
import { toMatchImageSnapshot } from "jest-image-snapshot";

describe("jest-image-snapshot usage with an image received from puppeteer", () => {
    let browser;

    beforeAll(async () => {
        browser = await puppeteer.launch();
    });

    it("renders correctly", async () => {
        expect.extend({ toMatchImageSnapshot });
        const page = await browser.newPage();
        await page.goto("http://localhost:3000/test-app");
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });

    afterAll(async () => {
        await browser.close();
    });
});
