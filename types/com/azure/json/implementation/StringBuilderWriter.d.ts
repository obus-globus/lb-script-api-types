import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class StringBuilderWriter extends Writer {
    static nullWriter(): Writer;
    constructor()
    constructor(arg0: StringBuilder)
    // private builder: StringBuilder;
    // private closed: boolean;
    append(arg0: string): Writer;
    append(arg0: CharSequence): Writer;
    append(arg0: CharSequence, arg1: number, arg2: number): Writer;
    close(): void;
    // private ensureOpen(): void;
    flush(): void;
    toString(): string;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}