import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { PartData } from '../../../../io/ktor/http/content/PartData.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
export class PartData$FileItem extends PartData {
    constructor(provider: () => ByteReadChannel, dispose: () => void, partHeaders: Headers, release: () => void)
    readonly originalFileName: string | null;
    readonly provider: () => ByteReadChannel;
}