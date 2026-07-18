import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { HeadersBuilder } from '../../../../io/ktor/http/HeadersBuilder.d.ts'
import type { HttpMethod } from '../../../../io/ktor/http/HttpMethod.d.ts'
import type { URLBuilder } from '../../../../io/ktor/http/URLBuilder.d.ts'
import type { Version } from '../../../../io/ktor/http/content/Version.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ResponsePushBuilder } from '../../../../io/ktor/server/response/ResponsePushBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultResponsePushBuilder extends Object implements ResponsePushBuilder {
    constructor(method: HttpMethod, url: URLBuilder, headers: HeadersBuilder, versions: Version[])
    constructor(url: URLBuilder, headers: Headers)
    constructor(call: ApplicationCall)
    readonly headers: HeadersBuilder;
    method: HttpMethod;
    readonly url: URLBuilder;
    versions: Version[];
}