import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReadersKt extends Object {
    static toByteArray(self: ByteReadChannel, limit: number): number[];
    static use(self: ByteWriteChannel, block: (param0: ByteWriteChannel) => void): void;
}