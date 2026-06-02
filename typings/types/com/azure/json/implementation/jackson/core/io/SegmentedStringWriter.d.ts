import type { BufferRecycler } from '../../../../../../../com/azure/json/implementation/jackson/core/util/BufferRecycler.d.ts'
import type { TextBuffer } from '../../../../../../../com/azure/json/implementation/jackson/core/util/TextBuffer.d.ts'
import type { Writer } from '../../../../../../../java/io/Writer.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class SegmentedStringWriter extends Writer {
    static nullWriter(): Writer;
    constructor(arg0: BufferRecycler)
    // private _buffer: TextBuffer;
    append(arg0: string): Writer;
    append(arg0: CharSequence): Writer;
    append(arg0: CharSequence, arg1: number, arg2: number): Writer;
    close(): void;
    flush(): void;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}