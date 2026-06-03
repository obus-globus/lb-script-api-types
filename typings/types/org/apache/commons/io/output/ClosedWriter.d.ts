import type { Writer } from '../../../../../java/io/Writer.d.ts'
export class ClosedWriter extends Writer {
    static CLOSED_WRITER: ClosedWriter;
    static INSTANCE: ClosedWriter;
    static nullWriter(): Writer;
    constructor()
    close(): void;
    flush(): void;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}