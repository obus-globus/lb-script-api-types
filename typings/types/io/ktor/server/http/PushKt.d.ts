import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ResponsePushBuilder } from '../../../../io/ktor/server/response/ResponsePushBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PushKt extends Object {
    static push(self: ApplicationCall, pathAndQuery: string): void;
    static push(self: ApplicationCall, encodedPath: string, encodedParameters: Parameters): void;
    static push(self: ApplicationCall, block: (param0: ResponsePushBuilder) => void): void;
}