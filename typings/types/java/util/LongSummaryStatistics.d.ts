import type { IntConsumer } from '../../java/util/function/IntConsumer.d.ts'
import type { LongConsumer } from '../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class LongSummaryStatistics extends Object implements IntConsumer, LongConsumer {
    constructor()
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    readonly count: number;
    readonly max: number;
    readonly min: number;
    readonly sum: number;
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    combine(arg0: LongSummaryStatistics): void;
    getAverage(): number;
    getCount(): number;
    getMax(): number;
    getMin(): number;
    getSum(): number;
    toString(): string;
}