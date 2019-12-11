class Checker {
    constructor(private value: number, private output: string) {}

    check(checkedNum: number): string {
        if (checkedNum % this.value == 0 || checkedNum.toString().indexOf(this.value.toString()) > -1) {
            return this.output;
        }
        return '';
    }
}

class FizzBuzz {
    public results: string[];
    private checker3 = new Checker(3, 'Fizz');
    private checker5 = new Checker(5, 'Buzz');

    constructor() {
        this.results = Array.from(Array(100), (x, index) => {
            return [this.checker3, this.checker5].map(c => c.check(index + 1)).join('') || (index + 1).toString();
        });
    }

    toString(): string {
        return this.results.join('\r\n');
    }
}

export { FizzBuzz };
