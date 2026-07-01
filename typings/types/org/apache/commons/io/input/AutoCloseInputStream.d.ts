import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { AutoCloseInputStream$Builder } from '../../../../../org/apache/commons/io/input/AutoCloseInputStream$Builder.d.ts'
import type { ProxyInputStream } from '../../../../../org/apache/commons/io/input/ProxyInputStream.d.ts'
export class AutoCloseInputStream extends ProxyInputStream {
    static builder(): AutoCloseInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: AutoCloseInputStream$Builder, arg1: any)
    afterRead(arg0: number): void;
    close(): void;
    finalize(): void;
}