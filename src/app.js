require('dotenv').config(); // Load environment variables

const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
app.use(express.json());

// Swagger UI for API documentation
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Book routes for CRUD operations
app.use("/books", bookRoutes);

// Start the server on port 3000
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});