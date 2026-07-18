import type { HttpMethod } from '../../../../io/ktor/http/HttpMethod.d.ts'
import type { HttpHeadersMap } from '../../../../io/ktor/http/cio/HttpHeadersMap.d.ts'
import type { HttpMessage } from '../../../../io/ktor/http/cio/HttpMessage.d.ts'
import type { CharArrayBuilder } from '../../../../io/ktor/http/cio/internals/CharArrayBuilder.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Request extends HttpMessage {
    constructor(method: HttpMethod, uri: CharSequence, version: CharSequence, headers: HttpHeadersMap, builder: CharArrayBuilder)
    readonly method: HttpMethod;
    readonly uri: CharSequence;
    readonly version: CharSequence;
}