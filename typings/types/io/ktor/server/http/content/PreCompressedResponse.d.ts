import type { ContentType } from '../../../../../io/ktor/http/ContentType.d.ts'
import type { Headers } from '../../../../../io/ktor/http/Headers.d.ts'
import type { HttpStatusCode } from '../../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { OutgoingContent$ReadChannelContent } from '../../../../../io/ktor/http/content/OutgoingContent$ReadChannelContent.d.ts'
import type { AttributeKey } from '../../../../../io/ktor/util/AttributeKey.d.ts'
import type { ByteReadChannel } from '../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PreCompressedResponse extends OutgoingContent$ReadChannelContent {
    constructor(original: OutgoingContent$ReadChannelContent, encoding: string | null)
    readonly contentLength: number | null;
    readonly contentType: ContentType | null;
    // private encoding: string | null;
    readonly headers: Headers;
    // private original: OutgoingContent$ReadChannelContent;
    readonly status: HttpStatusCode | null;
    getProperty<T extends unknown>(key: AttributeKey<T>): T | null;
    readFrom(): ByteReadChannel;
    readFrom(range: { start: number; endInclusive: number; step: number }): ByteReadChannel;
    setProperty<T extends unknown>(key: AttributeKey<T>, value: T | null): void;
}