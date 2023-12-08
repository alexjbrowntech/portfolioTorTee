import { app } from "./app.js";

const PORT = process.env.PORT ?? 4000;
const HOST = process.env.HOST ?? "0.0.0.0";

app.listen(PORT, HOST, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});
