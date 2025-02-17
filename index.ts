import app from "./app"; // Import the Express app
import config from "./utils/config";
import { info } from "./utils/logger"; // Import logger

app.listen(config.PORT, () => {
  info(`Server running on port ${config.PORT}`);
});
