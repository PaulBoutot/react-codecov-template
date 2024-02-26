import { render, screen } from '@testing-library/react';
import { helloWorld, add } from "./Foo";

describe('Foo Tests', () => {
  it('should return "Hello World!"', () => {
    expect(helloWorld()).toBe("Hello World!");
  });

  it('should add two numbers correctly', () => {
    expect(add(2, 4)).toBe(6);
  });
});