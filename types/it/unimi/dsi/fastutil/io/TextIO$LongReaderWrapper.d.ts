import type { LongConsumer } from '../../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { LongIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongIterator.d.ts'
import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TextIO$LongReaderWrapper extends Object implements LongIterator {
    constructor(arg0: BufferedReader)
    // private next: number;
    // private reader: BufferedReader;
    // private s: string;
    // private toAdvance: boolean;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextLong(): number;
    skip(arg0: number): number;
}