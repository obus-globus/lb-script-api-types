import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { OutgoingContent$ByteArrayContent } from '../../../../io/ktor/http/content/OutgoingContent$ByteArrayContent.d.ts'
export class ByteArrayContent extends OutgoingContent$ByteArrayContent {
    constructor(bytes: number[], contentType: ContentType | null, status: HttpStatusCode | null)
    // private bytes: number[];
    readonly contentLength: number;
    readonly contentType: ContentType | null;
    readonly status: HttpStatusCode | null;
    bytes(): number[];
}