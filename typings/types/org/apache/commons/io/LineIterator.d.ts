import type { BufferedReader } from '../../../../java/io/BufferedReader.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class LineIterator extends Object implements Closeable, Iterator<string> {
    static closeQuietly(paramarg0: LineIterator): void;
    constructor(arg0: Reader)
    // private bufferedReader: BufferedReader;
    // private cachedLine: string;
    // private finished: boolean;
    close(): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    hasNext(): boolean;
    isValidLine(arg0: string): boolean;
    next(): string;
    nextLine(): string;
    remove(): void;
}