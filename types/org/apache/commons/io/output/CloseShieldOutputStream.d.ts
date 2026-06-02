import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { ProxyOutputStream } from '../../../../../org/apache/commons/io/output/ProxyOutputStream.d.ts'
export class CloseShieldOutputStream extends ProxyOutputStream {
    static nullOutputStream(): OutputStream;
    static wrap(paramarg0: OutputStream): CloseShieldOutputStream;
    constructor(arg0: OutputStream)
    close(): void;
}