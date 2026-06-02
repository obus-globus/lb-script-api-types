import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { ProxyWriter } from '../../../../../org/apache/commons/io/output/ProxyWriter.d.ts'
export class TaggedWriter extends ProxyWriter {
    static nullWriter(): Writer;
    constructor(arg0: Writer)
    // private tag: Serializable;
    handleIOException(arg0: IOException): void;
    isCauseOf(arg0: Exception): boolean;
    throwIfCauseOf(arg0: Exception): void;
}