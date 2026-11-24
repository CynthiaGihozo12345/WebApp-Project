
const request = require("supertest");
const app = require("../index");

describe("WebApp Tests", () => {

    test("GET /health should return OK", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("OK");
    });

    test("GET / should return the home page", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain("CODERWANDA");
    });

});
