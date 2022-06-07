import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { expect } from "chai";
test("should render one post when user searches for January", async () => {
  render(<App />);

  let posts = screen.getAllByRole("listitem");
  expect(posts.length).equal(4);

  const searchBar = screen.getByRole("textbox");
  userEvent.type(searchBar, "January");

  let post = await screen.getAllByRole("listitem");
  console.log(post);
  expect(post.length).equal(1);
});
