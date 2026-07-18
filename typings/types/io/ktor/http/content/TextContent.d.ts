import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { OutgoingContent$ByteArrayContent } from '../../../../io/ktor/http/content/OutgoingContent$ByteArrayContent.d.ts'
export class TextContent extends OutgoingContent$ByteArrayContent {
    constructor(text: string, contentType: ContentType, status: HttpStatusCode | null)
    // private bytes: number[];
    readonly contentLength: number;
    readonly contentType: ContentType;
    readonly status: HttpStatusCode | null;
    readonly text: string;
    bytes(): number[];
    toString(): string;
}