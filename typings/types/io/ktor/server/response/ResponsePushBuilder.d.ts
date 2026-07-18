import type { HeadersBuilder } from '../../../../io/ktor/http/HeadersBuilder.d.ts'
import type { HttpMethod } from '../../../../io/ktor/http/HttpMethod.d.ts'
import type { URLBuilder } from '../../../../io/ktor/http/URLBuilder.d.ts'
import type { Version } from '../../../../io/ktor/http/content/Version.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ResponsePushBuilder extends Object{
    readonly headers: HeadersBuilder;
    method: HttpMethod;
    readonly url: URLBuilder;
    readonly versions: Version[];
}