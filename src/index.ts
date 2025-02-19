import app from "./app"; // Import the Express app
import config from "../utils/config";
import { info } from "../utils/logger";

// Listen on port 0.0.0.0 for hosting
app.listen(config.PORT, () => {
  info(`Server running on port ${config.PORT}`);
});
