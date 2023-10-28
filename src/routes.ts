import Elysia from "elysia";

export const routes = new Elysia();

routes.get("/", () => {
  return "Hello world from routes!";
});
