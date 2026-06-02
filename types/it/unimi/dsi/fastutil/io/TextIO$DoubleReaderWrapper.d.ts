import type { DoubleConsumer } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleConsumer.d.ts'
import type { DoubleIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIterator.d.ts'
import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TextIO$DoubleReaderWrapper extends Object implements DoubleIterator {
    constructor(arg0: BufferedReader)
    // private next: number;
    // private reader: BufferedReader;
    // private s: string;
    // private toAdvance: boolean;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextDouble(): number;
    skip(arg0: number): number;
}