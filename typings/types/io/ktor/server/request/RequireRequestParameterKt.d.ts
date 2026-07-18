import type { CookieEncoding } from '../../../../io/ktor/http/CookieEncoding.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { RoutingCall } from '../../../../io/ktor/server/routing/RoutingCall.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RequireRequestParameterKt extends Object {
    static requireCookie(self: ApplicationCall, name: string, encoding: CookieEncoding): string;
    static requireHeader(self: ApplicationCall, name: string): string;
    static requirePathParameter(self: RoutingCall, name: string): string;
    static requireQueryParameter(self: ApplicationCall, name: string): string;
}