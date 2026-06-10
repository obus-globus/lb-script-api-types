import type { LongConsumer } from '../../../../../java/util/function/LongConsumer.d.ts'
import type { LongUnaryOperator } from '../../../../../java/util/function/LongUnaryOperator.d.ts'
import type { LongStream } from '../../../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class SeedIterator extends Object {
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: (param0: number) => number)
    mapper: (param0: number) => number;
    // private max: number;
    // private min: number;
    // private seed: number;
    asStream(): LongStream;
    boxed(): Iterator<number>;
    forEachRemaining(arg0: (param0: number) => void): void;
    getMapper(): (param0: number) => number;
    hasNext(): boolean;
    next(): number;
    streamRemaining(): LongStream;
}