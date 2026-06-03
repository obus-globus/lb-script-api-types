import type { FilterOutputStream } from '../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Deflater } from '../../../java/util/zip/Deflater.d.ts'
export class DeflaterOutputStream extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: Deflater)
    constructor(arg0: OutputStream, arg1: Deflater, arg2: boolean)
    constructor(arg0: OutputStream, arg1: Deflater, arg2: number)
    constructor(arg0: OutputStream, arg1: Deflater, arg2: number, arg3: boolean)
    constructor(arg0: OutputStream, arg1: boolean)
    // private buf: number[];
    // private closed: boolean;
    // private def: Deflater;
    // private syncFlush: boolean;
    // private usesDefaultDeflater: boolean;
    close(): void;
    deflate(): void;
    finish(): void;
    flush(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}