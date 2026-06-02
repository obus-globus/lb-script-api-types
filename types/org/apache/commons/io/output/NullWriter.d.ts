import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class NullWriter extends Writer {
    static INSTANCE: NullWriter;
    static NULL_WRITER: NullWriter;
    static nullWriter(): Writer;
    constructor()
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