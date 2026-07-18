import type { HttpStatusCode } from '../../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { OutgoingContent$NoContent } from '../../../../../io/ktor/http/content/OutgoingContent$NoContent.d.ts'
export class HttpStatusCodeContent extends OutgoingContent$NoContent {
    constructor(value: HttpStatusCode)
    readonly status: HttpStatusCode;
    // private value: HttpStatusCode;
    toString(): string;
}