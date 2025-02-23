"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app")); // Import the Express app
const config_1 = __importDefault(require("../utils/config"));
const logger_1 = require("../utils/logger");
// Listen on port 0.0.0.0 for hosting
app_1.default.listen(config_1.default.PORT, () => {
    (0, logger_1.info)(`Server running on port ${config_1.default.PORT}`);
});
