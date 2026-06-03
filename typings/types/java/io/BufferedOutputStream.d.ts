import type { FilterOutputStream } from '../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
export class BufferedOutputStream extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: number)
    private constructor(arg0: OutputStream, arg1: number, arg2: number)
    // private buf: number[];
    // private count: number;
    // private maxBufSize: number;
    flush(): void;
    // private flushBuffer(): void;
    // private growIfNeeded(arg0: number): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}