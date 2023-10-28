import app from "./server";

app.listen(8080);

console.log(`Server running at ${app.server?.hostname}:${app.server?.port}`);
