import { createRoot } from "react-dom/client";
import App from "./App"

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
if (!rootElement) {
    console.error("Unexpected error: Root element was not found. Oh no!");
}