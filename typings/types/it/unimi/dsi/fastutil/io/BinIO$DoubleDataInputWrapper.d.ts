import type { DoubleConsumer } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleConsumer.d.ts'
import type { DoubleIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIterator.d.ts'
import type { DataInput } from '../../../../../java/io/DataInput.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BinIO$DoubleDataInputWrapper extends Object implements DoubleIterator {
    constructor(arg0: DataInput)
    // private dataInput: DataInput;
    // private endOfProcess: boolean;
    // private next: number;
    // private toAdvance: boolean;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextDouble(): number;
    skip(arg0: number): number;
}