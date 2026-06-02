import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { ProxyInputStream } from '../../../../../org/apache/commons/io/input/ProxyInputStream.d.ts'
export class TeeInputStream extends ProxyInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: OutputStream)
    constructor(arg0: InputStream, arg1: OutputStream, arg2: boolean)
    // private branch: OutputStream;
    // private closeBranch: boolean;
    close(): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}