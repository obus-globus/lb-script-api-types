import type { FilterWriter } from '../../../../../java/io/FilterWriter.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
export class ChunkedWriter extends FilterWriter {
    static nullWriter(): Writer;
    constructor(arg0: Writer)
    constructor(arg0: Writer, arg1: number)
    // private chunkSize: number;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}