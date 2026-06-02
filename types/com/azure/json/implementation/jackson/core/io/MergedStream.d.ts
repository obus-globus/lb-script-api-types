import type { IOContext } from '../../../../../../../com/azure/json/implementation/jackson/core/io/IOContext.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
export class MergedStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: IOContext, arg1: InputStream, arg2: number[], arg3: number, arg4: number)
    // private _b: number[];
    // private _ctxt: IOContext;
    // private _end: number;
    // private _in: InputStream;
    // private _ptr: number;
    // private _free(): void;
    available(): number;
    close(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}