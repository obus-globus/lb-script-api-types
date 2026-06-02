import type { DoubleConsumer } from '../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class DoubleSummaryStatistics extends Object implements DoubleConsumer {
    constructor()
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    readonly count: number;
    readonly max: number;
    readonly min: number;
    // private simpleSum: number;
    readonly sum: number;
    // private sumCompensation: number;
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    combine(arg0: DoubleSummaryStatistics): void;
    getAverage(): number;
    getCount(): number;
    getMax(): number;
    getMin(): number;
    getSum(): number;
    // private sumWithCompensation(arg0: number): void;
    toString(): string;
}