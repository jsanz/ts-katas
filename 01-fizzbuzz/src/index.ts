import { FizzBuzz } from './fizzbuzz';

const results = new FizzBuzz().results;

console.log('FizzBuzz kata');
results.forEach((value, index) => {
    console.log(index + 1, value);
});
