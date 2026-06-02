import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class StringBuilderWriter extends Writer {
    static nullWriter(): Writer;
    constructor()
    constructor(initialSize: number)
    // private builder: StringBuilder;
    append(c: string): StringBuilderWriter;
    append(csq: CharSequence): StringBuilderWriter;
    append(csq: CharSequence, start: number, end: number): StringBuilderWriter;
    close(): void;
    flush(): void;
    toString(): string;
    write(cbuf: string[], offset: number, length: number): void;
    write(c: number): void;
    write(str: string): void;
    write(str: string, offset: number, length: number): void;
}