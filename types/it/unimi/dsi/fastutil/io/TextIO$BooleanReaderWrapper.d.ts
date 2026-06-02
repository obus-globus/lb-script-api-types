import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TextIO$BooleanReaderWrapper extends Object implements BooleanIterator {
    constructor(arg0: BufferedReader)
    // private next: boolean;
    // private reader: BufferedReader;
    // private s: string;
    // private toAdvance: boolean;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    hasNext(): boolean;
    next(): boolean;
    nextBoolean(): boolean;
    skip(arg0: number): number;
}