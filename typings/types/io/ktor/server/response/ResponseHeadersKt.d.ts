import type { ResponseHeaders } from '../../../../io/ktor/server/response/ResponseHeaders.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ResponseHeadersKt extends Object {
    static appendIfAbsent(self: ResponseHeaders, name: string, value: string, safeOnly: boolean): void;
}