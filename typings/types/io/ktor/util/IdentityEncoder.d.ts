import type { ContentEncoder } from '../../../io/ktor/util/ContentEncoder.d.ts'
import type { Encoder } from '../../../io/ktor/util/Encoder.d.ts'
import type { ByteReadChannel } from '../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
export class IdentityEncoder extends Object implements ContentEncoder, Encoder {
    static INSTANCE: IdentityEncoder;
    readonly name: string;
    decode(source: ByteReadChannel, coroutineContext: CoroutineContext): ByteReadChannel;
    encode(source: ByteReadChannel, coroutineContext: CoroutineContext): ByteReadChannel;
    encode(source: ByteWriteChannel, coroutineContext: CoroutineContext): ByteWriteChannel;
    predictCompressedLength(contentLength: number): number | null;
}