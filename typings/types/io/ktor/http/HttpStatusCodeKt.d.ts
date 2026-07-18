import type { HttpStatusCode } from '../../../io/ktor/http/HttpStatusCode.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HttpStatusCodeKt extends Object {
    static allStatusCodes(): HttpStatusCode[];
    static isSuccess(self: HttpStatusCode): boolean;
}