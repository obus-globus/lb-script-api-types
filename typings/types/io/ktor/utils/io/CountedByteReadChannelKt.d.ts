import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { CountedByteReadChannel } from '../../../../io/ktor/utils/io/CountedByteReadChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CountedByteReadChannelKt extends Object {
    static counted(self: ByteReadChannel): CountedByteReadChannel;
    static getTotalBytesRead(paramarg0: ByteReadChannel): number;
}