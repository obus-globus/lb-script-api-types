import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RawSource } from '../../../../kotlinx/io/RawSource.d.ts'
export class ByteReadChannelSourceKt extends Object {
    static asSource(self: ByteReadChannel): RawSource;
}