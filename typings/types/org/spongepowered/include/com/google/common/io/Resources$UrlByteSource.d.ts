import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { URL } from '../../../../../../../java/net/URL.d.ts'
import type { ByteSource } from '../../../../../../../org/spongepowered/include/com/google/common/io/ByteSource.d.ts'
import type { LineProcessor } from '../../../../../../../org/spongepowered/include/com/google/common/io/LineProcessor.d.ts'
export class Resources$UrlByteSource extends ByteSource {
    constructor(arg0: URL, arg1: LineProcessor<string[]>)
    // private url: URL;
    openStream(): InputStream;
    toString(): string;
}