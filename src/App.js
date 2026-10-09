import React, { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");
  const [isResult, setIsResult] = useState(false);

  const handleClick = (value) => {
    const operators = ["+", "-", "*", "/"];

    if (display === "Error") {
      setDisplay("0");
      setExpression("");
      setIsResult(false);
    }

    if (operators.includes(value)) {
      if (display === "Error") return;

      const current = isResult ? display : expression || display;

      if (operators.includes(current.slice(-1))) {
        const updated = current.slice(0, -1) + value;
        setExpression(updated);
        setDisplay(updated);
      } else {
        const updated = current + value;
        setExpression(updated);
        setDisplay(updated);
      }

      setIsResult(false);
      return;
    }

    if (value === ".") {
      const current = isResult ? "0" : display;
      const lastNumber = current.split(/[+\-*/]/).pop();

      if (lastNumber.includes(".")) return;

      const updated = isResult
        ? "0."
        : current === "0"
          ? "0."
          : current + ".";

      setDisplay(updated);
      setExpression(updated);
      setIsResult(false);
      return;
    }

    const current = isResult ? "0" : display;
    const updated =
      current === "0" || current === "Error"
        ? value
        : current + value;

    setDisplay(updated);
    setExpression(updated);
    setIsResult(false);
  };

  const calculate = () => {
    const current = expression || display;

    // Accept only digits, decimal points and arithmetic operators.
    if (!/^[0-9+\-*/. ]+$/.test(current)) {
      setDisplay("Error");
      setExpression("");
      setIsResult(true);
      return;
    }

    // Ensure the expression ends with a number.
    if (/[+\-*/.]$/.test(current)) {
      setDisplay("Error");
      setExpression("");
      setIsResult(true);
      return;
    }

    try {
      const tokens = current.match(
        /(?:\d+\.?\d*|\.\d+)|[+\-*/]/g
      );

      if (!tokens || tokens.join("") !== current.replace(/\s/g, "")) {
        throw new Error("Invalid expression");
      }

      // Perform multiplication and division first.
      const reduced = [];

      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (token === "*" || token === "/") {
          const left = reduced.pop();
          const right = Number(tokens[++i]);

          if (token === "/" && right === 0) {
            throw new Error("Division by zero");
          }

          const result =
            token === "*" ? left * right : left / right;

          reduced.push(result);
        } else if (token === "+" || token === "-") {
          reduced.push(token);
        } else {
          reduced.push(Number(token));
        }
      }

      // Perform addition and subtraction.
      let result = Number(reduced[0]);

      for (let i = 1; i < reduced.length; i += 2) {
        const operator = reduced[i];
        const number = Number(reduced[i + 1]);

        result =
          operator === "+"
            ? result + number
            : result - number;
      }

      if (!Number.isFinite(result)) {
        throw new Error("Invalid result");
      }

      // Remove small floating-point precision errors.
      result = Number(result.toPrecision(12));

      setDisplay(String(result));
      setExpression(String(result));
      setIsResult(true);
    } catch {
      setDisplay("Error");
      setExpression("");
      setIsResult(true);
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
    setExpression("");
    setIsResult(false);
  };

  const deleteLast = () => {
    if (display === "Error" || isResult) {
      clearDisplay();
      return;
    }

    const updated = display.slice(0, -1) || "0";

    setDisplay(updated);
    setExpression(updated === "0" ? "" : updated);
  };

  const buttons = [
    "C", "DEL", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", "."
  ];

  return (
    <div className="calculator">
      <h1>React Calculator</h1>

      <div
        className="display"
        data-testid="display"
        aria-live="polite"
      >
        {display}
      </div>

      <div className="buttons">
        {buttons.map((value) => (
          <button
            key={value}
            onClick={() => {
              if (value === "C") {
                clearDisplay();
              } else if (value === "DEL") {
                deleteLast();
              } else if (value === "=") {
                calculate();
              } else {
                handleClick(value);
              }
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
