import type { ByteReadChannel } from '../../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WritingKt extends Object {
    static copyTo(self: ByteReadChannel, out: OutputStream, limit: number): number;
}