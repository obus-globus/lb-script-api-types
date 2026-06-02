import type { Writer } from '../../java/io/Writer.d.ts'
import type { StringBuffer } from '../../java/lang/StringBuffer.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export class StringWriter extends Writer {
    static nullWriter(): Writer;
    constructor()
    constructor(arg0: number)
    // private buf: StringBuffer;
    append(arg0: string): StringWriter;
    append(arg0: CharSequence): StringWriter;
    append(arg0: CharSequence, arg1: number, arg2: number): StringWriter;
    close(): void;
    flush(): void;
    getBuffer(): StringBuffer;
    toString(): string;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}