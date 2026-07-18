import type { HttpHeadersMap } from '../../../../io/ktor/http/cio/HttpHeadersMap.d.ts'
import type { Request } from '../../../../io/ktor/http/cio/Request.d.ts'
import type { Response } from '../../../../io/ktor/http/cio/Response.d.ts'
import type { CharArrayBuilder } from '../../../../io/ktor/http/cio/internals/CharArrayBuilder.d.ts'
import type { MutableRange } from '../../../../io/ktor/http/cio/internals/MutableRange.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpParserKt extends Object {
    static getHttpLineEndings(): number;
    static parseHeaderName(text: CharArrayBuilder, range: MutableRange): number;
    static parseHeaderValue(text: CharArrayBuilder, range: MutableRange): void;
    static parseHeaders(input: ByteReadChannel, builder: CharArrayBuilder, range: MutableRange): HttpHeadersMap | null;
    static parseHeaders(input: ByteReadChannel): HttpHeadersMap;
    static parseRequest(input: ByteReadChannel): Request | null;
    static parseResponse(input: ByteReadChannel): Response | null;
}