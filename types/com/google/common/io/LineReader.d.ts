import type { LineBuffer } from '../../../../com/google/common/io/LineBuffer.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Readable } from '../../../../java/lang/Readable.d.ts'
import type { CharBuffer } from '../../../../java/nio/CharBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LineReader extends Object {
    constructor(readable: Readable)
    // private buf: string[];
    // private cbuf: CharBuffer;
    // private lineBuf: LineBuffer;
    // private lines: string[];
    // private readable: Readable;
    // private reader: Reader;
    readLine(): string;
}