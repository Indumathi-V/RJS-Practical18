import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

function setup() {
  const user = userEvent.setup();
  render(<App />);

  const press = async (value) => {
    await user.click(
      screen.getByRole("button", { name: value })
    );
  };

  const display = () => screen.getByTestId("display");

  return { press, display };
}

test("displays the calculator", () => {
  const { display } = setup();

  expect(
    screen.getByRole("heading", { name: /react calculator/i })
  ).toBeInTheDocument();

  expect(display()).toHaveTextContent("0");
});

test("performs addition", async () => {
  const { press, display } = setup();

  await press("2");
  await press("+");
  await press("3");
  await press("=");

  expect(display()).toHaveTextContent("5");
});

test("performs subtraction", async () => {
  const { press, display } = setup();

  await press("9");
  await press("-");
  await press("4");
  await press("=");

  expect(display()).toHaveTextContent("5");
});

test("performs multiplication", async () => {
  const { press, display } = setup();

  await press("6");
  await press("*");
  await press("7");
  await press("=");

  expect(display()).toHaveTextContent("42");
});

test("performs division", async () => {
  const { press, display } = setup();

  await press("8");
  await press("/");
  await press("2");
  await press("=");

  expect(display()).toHaveTextContent("4");
});

test("supports decimal calculations", async () => {
  const { press, display } = setup();

  await press("1");
  await press(".");
  await press("5");
  await press("+");
  await press("2");
  await press(".");
  await press("5");
  await press("=");

  expect(display()).toHaveTextContent("4");
});

test("clears the display", async () => {
  const { press, display } = setup();

  await press("8");
  await press("C");

  expect(display()).toHaveTextContent("0");
});

test("deletes the last character", async () => {
  const { press, display } = setup();

  await press("1");
  await press("2");
  await press("3");
  await press("DEL");

  expect(display()).toHaveTextContent("12");
});

test("handles division by zero", async () => {
  const { press, display } = setup();

  await press("8");
  await press("/");
  await press("0");
  await press("=");

  expect(display()).toHaveTextContent(/error/i);
});
