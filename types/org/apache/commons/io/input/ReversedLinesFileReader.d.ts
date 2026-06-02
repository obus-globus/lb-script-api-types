import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { SeekableByteChannel } from '../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { IOIterable } from '../../../../../org/apache/commons/io/function/IOIterable.d.ts'
import type { IOIterator } from '../../../../../org/apache/commons/io/function/IOIterator.d.ts'
import type { IOSpliterator } from '../../../../../org/apache/commons/io/function/IOSpliterator.d.ts'
import type { ReversedLinesFileReader$Builder } from '../../../../../org/apache/commons/io/input/ReversedLinesFileReader$Builder.d.ts'
import type { ReversedLinesFileReader$FilePart } from '../../../../../org/apache/commons/io/input/ReversedLinesFileReader$FilePart.d.ts'
export class ReversedLinesFileReader extends Object implements Closeable, IOIterable<string> {
    static builder(): ReversedLinesFileReader$Builder;
    constructor(arg0: File)
    constructor(arg0: File, arg1: Charset)
    constructor(arg0: File, arg1: number, arg2: Charset)
    constructor(arg0: File, arg1: number, arg2: string)
    constructor(arg0: Path[], arg1: Charset)
    constructor(arg0: Path[], arg1: number, arg2: Charset)
    constructor(arg0: Path[], arg1: number, arg2: string)
    private constructor(arg0: ReversedLinesFileReader$Builder)
    // private avoidNewlineSplitBufferSize: number;
    // private blockSize: number;
    // private byteDecrement: number;
    // private channel: SeekableByteChannel;
    // private charset: Charset;
    // private currentFilePart: ReversedLinesFileReader$FilePart;
    // private newLineSequences: number[][];
    // private totalBlockCount: number;
    // private totalByteLength: number;
    // private trailingNewlineOfFileSkipped: boolean;
    close(): void;
    forEach(arg0: (param0: T) => void): void;
    iterator(): IOIterator<string>;
    readLine(): string;
    readLines(arg0: number): string[];
    spliterator(): IOSpliterator<T>;
    toString(arg0: number): string;
    unwrap(): string[];
}