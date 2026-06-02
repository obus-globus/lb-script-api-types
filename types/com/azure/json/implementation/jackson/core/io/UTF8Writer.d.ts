import type { IOContext } from '../../../../../../../com/azure/json/implementation/jackson/core/io/IOContext.d.ts'
import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../../../../java/io/Writer.d.ts'
export class UTF8Writer extends Writer {
    static nullWriter(): Writer;
    constructor(arg0: IOContext, arg1: OutputStream)
    // private _context: IOContext;
    // private _out: OutputStream;
    // private _outBuffer: number[];
    // private _outBufferEnd: number;
    // private _outPtr: number;
    // private _surrogate: number;
    append(arg0: string): Writer;
    close(): void;
    // private convertSurrogate(arg0: number): number;
    flush(): void;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}