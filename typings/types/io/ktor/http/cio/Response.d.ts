import type { HttpHeadersMap } from '../../../../io/ktor/http/cio/HttpHeadersMap.d.ts'
import type { HttpMessage } from '../../../../io/ktor/http/cio/HttpMessage.d.ts'
import type { CharArrayBuilder } from '../../../../io/ktor/http/cio/internals/CharArrayBuilder.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Response extends HttpMessage {
    constructor(version: CharSequence, status: number, statusText: CharSequence, headers: HttpHeadersMap, builder: CharArrayBuilder)
    readonly status: number;
    readonly statusText: CharSequence;
    readonly version: CharSequence;
}