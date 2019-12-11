import { FizzBuzz } from '../fizzbuzz';

const instance = new FizzBuzz();
const results = instance.results;

test('array size', () => {
    expect(instance.results).toHaveLength(100);
});

test('test numbers divisible by 3', () => {
    expect(results[0]).toBe('1');

    expect(results[2]).toBe('Fizz');
    expect(results[5]).toBe('Fizz');
    expect(results[8]).toBe('Fizz');
});

test('test numbers that has a 3', () => {
    expect(results[31]).toBe('Fizz');
});

test('test numbers divisible by 5', () => {
    expect(results[4]).toBe('Buzz');
    expect(results[9]).toBe('Buzz');
});

test('test numbers that meet both conditions', () => {
    expect(results[14]).toBe('FizzBuzz');
    expect(results[44]).toBe('FizzBuzz');
    expect(results[29]).toBe('FizzBuzz');
});

test('printing contents to have something', () => {
    const report: string = instance.toString();
    expect(report).not.toBeNull();
    expect(report).not.toBe('');
});
