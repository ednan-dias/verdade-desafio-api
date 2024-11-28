import { app } from "./app";

app
  .listen({ port: 3001, host: "0.0.0.0" })
  .then(() => console.log(`Server is running at http://localhost:3001 🚀`));
