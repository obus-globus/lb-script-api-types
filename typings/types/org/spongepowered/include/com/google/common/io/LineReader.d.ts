import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { Readable } from '../../../../../../../java/lang/Readable.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LineBuffer } from '../../../../../../../org/spongepowered/include/com/google/common/io/LineBuffer.d.ts'
export class LineReader extends Object {
    constructor(arg0: Readable)
    // private buf: string[];
    // private cbuf: CharBuffer;
    // private lineBuf: LineBuffer;
    // private lines: string[];
    // private readable: Readable;
    // private reader: Reader;
    readLine(): string;
}