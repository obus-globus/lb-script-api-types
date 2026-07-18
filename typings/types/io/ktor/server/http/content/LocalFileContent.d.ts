import type { ContentType } from '../../../../../io/ktor/http/ContentType.d.ts'
import type { OutgoingContent$ReadChannelContent } from '../../../../../io/ktor/http/content/OutgoingContent$ReadChannelContent.d.ts'
import type { ByteReadChannel } from '../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
export class LocalFileContent extends OutgoingContent$ReadChannelContent {
    constructor(file: File, contentType: ContentType)
    readonly contentLength: number;
    readonly contentType: ContentType;
    readonly file: File;
    readFrom(): ByteReadChannel;
    readFrom(range: { start: number; endInclusive: number; step: number }): ByteReadChannel;
}