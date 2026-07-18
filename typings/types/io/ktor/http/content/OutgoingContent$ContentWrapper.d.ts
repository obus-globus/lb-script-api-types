import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { OutgoingContent } from '../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class OutgoingContent$ContentWrapper extends OutgoingContent {
    constructor(delegate: OutgoingContent)
    readonly contentLength: number | null;
    readonly contentType: ContentType | null;
    // private delegate: OutgoingContent;
    readonly headers: Headers;
    readonly status: HttpStatusCode | null;
    copy(delegate: OutgoingContent): OutgoingContent$ContentWrapper;
    delegate(): OutgoingContent;
    getProperty<T extends unknown>(key: AttributeKey<T>): T | null;
    setProperty<T extends unknown>(key: AttributeKey<T>, value: T | null): void;
}