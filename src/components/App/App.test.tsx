import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders The pointing gentlemen link", () => {
  render(<App />);
  const text = screen.getByText(/The pointing gentlemen/i);
  expect(text).toBeInTheDocument();
});

test("If element main is in the document", () => {
  render(<App />);
  const header = screen.getAllByRole("heading");
  expect(header).toBeInTheDocument();
});
