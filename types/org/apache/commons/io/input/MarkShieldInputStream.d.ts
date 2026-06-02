import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ProxyInputStream } from '../../../../../org/apache/commons/io/input/ProxyInputStream.d.ts'
export class MarkShieldInputStream extends ProxyInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    mark(arg0: number): void;
    markSupported(): boolean;
    reset(): void;
}