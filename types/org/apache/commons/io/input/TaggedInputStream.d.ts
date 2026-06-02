import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { ProxyInputStream } from '../../../../../org/apache/commons/io/input/ProxyInputStream.d.ts'
export class TaggedInputStream extends ProxyInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    // private tag: Serializable;
    handleIOException(arg0: IOException): void;
    isCauseOf(arg0: Throwable): boolean;
    throwIfCauseOf(arg0: Throwable): void;
}