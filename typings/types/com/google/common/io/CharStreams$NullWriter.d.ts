import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CharStreams$NullWriter extends Writer {
    static nullWriter(): Writer;
    private constructor()
    append(c: string): Writer;
    append(csq: CharSequence): Writer;
    append(csq: CharSequence, start: number, end: number): Writer;
    close(): void;
    flush(): void;
    toString(): string;
    write(cbuf: string[]): void;
    write(cbuf: string[], off: number, len: number): void;
    write(c: number): void;
    write(str: string): void;
    write(str: string, off: number, len: number): void;
}