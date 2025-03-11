const request = require("supertest");
const app = require("../index");  // Ensure your Express app is exported in index.js

describe("GET /", () => {
    it("should return 'Hello World!'", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Hello World!");
    });
});
