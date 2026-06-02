import type { FilteredOutputStream } from '../../../../io/jsonwebtoken/impl/io/FilteredOutputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class TeeOutputStream extends FilteredOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream, arg1: OutputStream)
    // private other: OutputStream;
    close(): void;
    flush(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}