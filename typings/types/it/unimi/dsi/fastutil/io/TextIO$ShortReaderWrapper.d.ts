import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterator.d.ts'
import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TextIO$ShortReaderWrapper extends Object implements ShortIterator {
    constructor(arg0: BufferedReader)
    // private next: number;
    // private reader: BufferedReader;
    // private s: string;
    // private toAdvance: boolean;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextShort(): number;
    skip(arg0: number): number;
}