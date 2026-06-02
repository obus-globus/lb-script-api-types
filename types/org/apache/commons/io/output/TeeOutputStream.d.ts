import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { ProxyOutputStream } from '../../../../../org/apache/commons/io/output/ProxyOutputStream.d.ts'
export class TeeOutputStream extends ProxyOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream, arg1: OutputStream)
    // private branch: OutputStream;
    close(): void;
    flush(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}