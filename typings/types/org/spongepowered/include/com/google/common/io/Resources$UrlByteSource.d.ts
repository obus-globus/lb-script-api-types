import type { Resources$1 } from '../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { URL } from '../../../../../../../java/net/URL.d.ts'
import type { ByteSource } from '../../../../../../../org/spongepowered/include/com/google/common/io/ByteSource.d.ts'
export class Resources$UrlByteSource extends ByteSource {
    private constructor(arg0: URL)
    constructor(arg0: URL, arg1: Resources$1)
    // private url: URL;
    openStream(): InputStream;
    toString(): string;
}