import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpStatusExceptionKt extends Object {
    static badRequest(self: ApplicationCall, reason: string): void;
    static forbidden(self: ApplicationCall, reason: string): void;
    static internalServerError(self: ApplicationCall, reason: string): void;
    static notFound(self: ApplicationCall, path: string, reason: string): void;
    static serviceUnavailable(self: ApplicationCall, reason: string): void;
    static unauthorized(self: ApplicationCall, reason: string): void;
}