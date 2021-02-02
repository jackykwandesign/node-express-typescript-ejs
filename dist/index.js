"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = require("./utils/logger");
dotenv_1.default.config();
const app = express_1.default();
// Configure Express to use EJS
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
logger_1.logger.defaultMeta = { service: "main-service" };
// define a route handler for the default home page
app.get("/", (req, res) => {
    // render the index template
    res.render("index");
});
app.get("/test", (req, res) => {
    // render the index template
    res.render("test", { data: "test1234" });
});
// start the Express server
const port = process.env.SERVER_PORT || 4001;
app.listen(port, () => {
    logger_1.logger.info({
        message: `server started at http://localhost:${port}`
    });
});
//# sourceMappingURL=index.js.map