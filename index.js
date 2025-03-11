const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello World!");
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    });
}

test("Deliberate Failure", () => {
  expect(1 + 1).toBe(3); // Incorrect assertion
});

module.exports = app; // Export app for testing