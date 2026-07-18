import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ResponseCookies } from '../../../../io/ktor/server/response/ResponseCookies.d.ts'
import type { ResponseHeaders } from '../../../../io/ktor/server/response/ResponseHeaders.d.ts'
import type { ResponsePushBuilder } from '../../../../io/ktor/server/response/ResponsePushBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ApplicationResponse extends Object{
    readonly call: ApplicationCall;
    readonly cookies: ResponseCookies;
    readonly headers: ResponseHeaders;
    /*not mapped: */ isCommitted(): boolean;
    /*not mapped: */ isSent(): boolean;
    push(builder: ResponsePushBuilder): void;
    status(): HttpStatusCode | null;
    status(value: HttpStatusCode): void;
}