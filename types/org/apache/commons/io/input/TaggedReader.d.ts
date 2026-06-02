import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { ProxyReader } from '../../../../../org/apache/commons/io/input/ProxyReader.d.ts'
export class TaggedReader extends ProxyReader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: Reader)
    // private tag: Serializable;
    handleIOException(arg0: IOException): void;
    isCauseOf(arg0: Throwable): boolean;
    throwIfCauseOf(arg0: Throwable): void;
}