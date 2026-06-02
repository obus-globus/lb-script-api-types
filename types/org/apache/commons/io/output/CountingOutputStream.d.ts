import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { ProxyOutputStream } from '../../../../../org/apache/commons/io/output/ProxyOutputStream.d.ts'
export class CountingOutputStream extends ProxyOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    readonly count: number;
    beforeWrite(arg0: number): void;
    getByteCount(): number;
    getCount(): number;
    resetByteCount(): number;
    resetCount(): number;
}