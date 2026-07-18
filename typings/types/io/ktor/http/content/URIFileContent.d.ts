import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { OutgoingContent$ReadChannelContent } from '../../../../io/ktor/http/content/OutgoingContent$ReadChannelContent.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
export class URIFileContent extends OutgoingContent$ReadChannelContent {
    constructor(uri: URI, contentType: ContentType, contentLength: number | null)
    constructor(url: URL, contentType: ContentType)
    readonly contentLength: number | null;
    readonly contentType: ContentType;
    readonly uri: URI;
    readFrom(): ByteReadChannel;
    readFrom(range: { start: number; endInclusive: number; step: number }): ByteReadChannel;
}