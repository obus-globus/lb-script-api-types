import type { Writer } from '../../java/io/Writer.d.ts'
export class BufferedWriter extends Writer {
    static nullWriter(): Writer;
    constructor(arg0: Writer)
    constructor(arg0: Writer, arg1: number)
    private constructor(arg0: Writer, arg1: number, arg2: number)
    // private cb: string[];
    // private maxChars: number;
    // private nChars: number;
    // private nextChar: number;
    // private out: Writer;
    close(): void;
    // private ensureOpen(): void;
    flush(): void;
    flushBuffer(): void;
    // private growIfNeeded(arg0: number): void;
    // private min(arg0: number, arg1: number): number;
    newLine(): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string, arg1: number, arg2: number): void;
}