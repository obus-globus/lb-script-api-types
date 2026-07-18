import type { ContentType } from '../../../../../io/ktor/http/ContentType.d.ts'
import type { OutgoingContent$ReadChannelContent } from '../../../../../io/ktor/http/content/OutgoingContent$ReadChannelContent.d.ts'
import type { ByteReadChannel } from '../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
export class LocalPathContent extends OutgoingContent$ReadChannelContent {
    constructor(path: Path, contentType: ContentType)
    readonly contentLength: number;
    readonly contentType: ContentType;
    readonly path: Path;
    readFrom(): ByteReadChannel;
    readFrom(range: { start: number; endInclusive: number; step: number }): ByteReadChannel;
}