import type { HttpAuthHeader } from '../../../../io/ktor/http/auth/HttpAuthHeader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpAuthHeaderKt extends Object {
    static parseAuthorizationHeader(headerValue: string): HttpAuthHeader | null;
    static parseAuthorizationHeaders(headerValue: string): HttpAuthHeader[];
}