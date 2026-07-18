import type { ByteReadChannel } from '../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ShouldFlush extends Object{
    invoke(channel: ByteReadChannel, unflushedBytes: number): boolean;
}