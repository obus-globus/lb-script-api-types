import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { PartData } from '../../../../io/ktor/http/content/PartData.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
export class PartData$BinaryChannelItem extends PartData {
    constructor(provider: () => ByteReadChannel, partHeaders: Headers)
    readonly provider: () => ByteReadChannel;
}