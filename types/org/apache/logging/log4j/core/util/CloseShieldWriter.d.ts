import type { Writer } from '../../../../../../java/io/Writer.d.ts'
export class CloseShieldWriter extends Writer {
    static nullWriter(): Writer;
    constructor(delegate: Writer)
    // private delegate: Writer;
    close(): void;
    flush(): void;
    write(cbuf: string[], off: number, len: number): void;
}