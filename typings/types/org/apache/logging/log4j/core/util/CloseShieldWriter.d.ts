import type { Writer } from '../../../../../../java/io/Writer.d.ts'
export class CloseShieldWriter extends Writer {
    static nullWriter(): Writer;
    constructor(delegate: Writer)
    // private delegate: Writer;
    close(): void;
    flush(): void;
    write(arg0: string[]): void;
    write(cbuf: string[], off: number, len: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}