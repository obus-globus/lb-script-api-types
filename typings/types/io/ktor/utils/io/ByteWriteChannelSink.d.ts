import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../../kotlinx/io/Buffer.d.ts'
import type { RawSink } from '../../../../kotlinx/io/RawSink.d.ts'
export class ByteWriteChannelSink extends Object implements RawSink {
    constructor(origin: ByteWriteChannel)
    // private origin: ByteWriteChannel;
    close(): void;
    flush(): void;
    write(source: Buffer, byteCount: number): void;
}