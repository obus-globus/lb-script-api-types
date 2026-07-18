import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../../kotlinx/io/Buffer.d.ts'
import type { RawSource } from '../../../../kotlinx/io/RawSource.d.ts'
export class ByteReadChannelSource extends Object implements RawSource {
    constructor(origin: ByteReadChannel)
    // private origin: ByteReadChannel;
    close(): void;
    readAtMostTo(sink: Buffer, byteCount: number): number;
}