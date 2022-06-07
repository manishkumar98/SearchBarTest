import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { expect } from "chai";
test("should render one post when user searches for preact", () => {
  render(<App />);

  let posts = screen.getAllByRole("listitem");
  expect(posts.length).toEqual(4);

  const searchBar = screen.getByRole("textbox");
  userEvent.type(searchBar, "preact");

  posts = screen.getAllByRole("listitem");
  setTimeout(() => expect(posts.length).toEqual(1), 1000);
});
