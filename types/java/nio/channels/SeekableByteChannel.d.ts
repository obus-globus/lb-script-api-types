import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ByteChannel } from '../../../java/nio/channels/ByteChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SeekableByteChannel extends ByteChannel, Object{
    position(): number;
    position(arg0: number): SeekableByteChannel;
    read(arg0: ByteBuffer): number;
    size(): number;
    truncate(arg0: number): SeekableByteChannel;
    write(arg0: ByteBuffer): number;
}