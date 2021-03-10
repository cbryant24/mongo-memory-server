import request from "supertest";
import { app } from "../../app";

it("can fetch data", async () => {
  const response = await request(app).get("/api/data").send().expect(200);

  expect(response.text).toEqual("hello world");
});
