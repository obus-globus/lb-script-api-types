import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ProxyInputStream } from '../../../../../org/apache/commons/io/input/ProxyInputStream.d.ts'
export class CloseShieldInputStream extends ProxyInputStream {
    static nullInputStream(): InputStream;
    static systemIn(paramarg0: InputStream): InputStream;
    static wrap(paramarg0: InputStream): CloseShieldInputStream;
    constructor(arg0: InputStream)
    close(): void;
}