import { getNameFromEmail } from './extract';
import { describe, test, expect } from 'vitest';

describe('Extracts name from email', () => {
  test('shubham.nagota@gmail.com', () => {
    expect(getNameFromEmail('shubham.nagota@gmail.com')).toBe('Shubham Nagota');
  });
  test('john.doe@gmail.com', () => {
    expect(getNameFromEmail('john.doe@gmail.com')).toBe('John Doe');
  });
  test('jacob09@gmail.com', () => {
    expect(getNameFromEmail('jacob09@gmail.com')).toBe('Jacob');
  });
  test('shubhamnagota000@gmail.com', () => {
    expect(getNameFromEmail('shubhamnagota000@gmail.com')).toBe(
      'Shubhamnagota',
    );
  });
  test('ShubhamNagota@gmail.com', () => {
    expect(getNameFromEmail('ShubhamNagota@gmail.com')).toBe('Shubhamnagota');
  });
  test('john.doe+testing@gmail.com', () => {
    expect(getNameFromEmail('john.doe+testing@gmail.com')).toBe('John Doe');
  });
  test('jacob-testing+043hd@gmail.com', () => {
    expect(getNameFromEmail('jacob-testing+043hd@gmail.com')).toBe(
      'Jacob Testing',
    );
  });
  test('Shubham_Nagota@gmail.com', () => {
    expect(getNameFromEmail('Shubham_Nagota@gmail.com')).toBe('Shubham Nagota');
  });

  test('9876543210@gmail.com', () => {
    expect(getNameFromEmail('9876543210@gmail.com')).toBe('');
  });
});
