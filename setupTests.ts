import { expect, vi } from 'vitest';
// import matchers from "@testing-library/jest-dom/matchers";
import * as matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';

expect.extend(matchers);

global.fetch = vi.fn();
