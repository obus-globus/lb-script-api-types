import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { RequestConnectionPoint } from '../../../../io/ktor/http/RequestConnectionPoint.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { RequestCookies } from '../../../../io/ktor/server/request/RequestCookies.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ApplicationRequest extends Object{
    readonly call: ApplicationCall;
    readonly cookies: RequestCookies;
    readonly headers: Headers;
    readonly local: RequestConnectionPoint;
    readonly queryParameters: Parameters;
    readonly rawQueryParameters: Parameters;
    receiveChannel(): ByteReadChannel;
}