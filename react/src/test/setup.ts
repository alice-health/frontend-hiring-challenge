import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react"; // ou @testing-library/vue
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
