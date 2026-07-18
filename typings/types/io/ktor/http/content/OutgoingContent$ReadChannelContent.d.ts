import type { OutgoingContent } from '../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
export abstract class OutgoingContent$ReadChannelContent extends OutgoingContent {
    constructor()
    readFrom(): ByteReadChannel;
    readFrom(range: { start: number; endInclusive: number; step: number }): ByteReadChannel;
}