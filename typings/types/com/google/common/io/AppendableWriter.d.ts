import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class AppendableWriter extends Writer {
    static nullWriter(): Writer;
    constructor(target: Appendable)
    // private closed: boolean;
    // private target: Appendable;
    append(c: string): Writer;
    append(charSeq: CharSequence): Writer;
    append(charSeq: CharSequence, start: number, end: number): Writer;
    // private checkNotClosed(): void;
    close(): void;
    flush(): void;
    write(arg0: string[]): void;
    write(cbuf: string[], off: number, len: number): void;
    write(c: number): void;
    write(str: string): void;
    write(str: string, off: number, len: number): void;
}