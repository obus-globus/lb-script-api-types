import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { ProxyOutputStream } from '../../../../../org/apache/commons/io/output/ProxyOutputStream.d.ts'
export class TaggedOutputStream extends ProxyOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    // private tag: Serializable;
    handleIOException(arg0: IOException): void;
    isCauseOf(arg0: Exception): boolean;
    throwIfCauseOf(arg0: Exception): void;
}