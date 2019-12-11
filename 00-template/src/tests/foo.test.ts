import { sum } from '../foo';

test('basic', () => {
    expect(sum()).toBe(0);
});

test('basic again', () => {
    expect(sum(1, 2)).toBe(3);
});

test('basic again again', () => {
    expect(sum(2, 2)).toBe(4);
});
