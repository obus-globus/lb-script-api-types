import type { HttpHeadersMap } from '../../../../io/ktor/http/cio/HttpHeadersMap.d.ts'
import type { CharArrayBuilder } from '../../../../io/ktor/http/cio/internals/CharArrayBuilder.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HttpMessage extends Object implements Closeable {
    constructor(headers: HttpHeadersMap, builder: CharArrayBuilder)
    // private builder: CharArrayBuilder;
    readonly headers: HttpHeadersMap;
    close(): void;
    release(): void;
}