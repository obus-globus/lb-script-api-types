import type { Writer } from '../../java/io/Writer.d.ts'
export abstract class FilterWriter extends Writer {
    static nullWriter(): Writer;
    constructor(arg0: Writer)
    // private out: Writer;
    close(): void;
    flush(): void;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}