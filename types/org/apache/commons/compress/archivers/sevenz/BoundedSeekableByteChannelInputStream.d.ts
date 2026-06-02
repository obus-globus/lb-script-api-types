import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { SeekableByteChannel } from '../../../../../../java/nio/channels/SeekableByteChannel.d.ts'
export class BoundedSeekableByteChannelInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: SeekableByteChannel, arg1: number)
    // private buffer: ByteBuffer;
    // private bytesRemaining: number;
    // private channel: SeekableByteChannel;
    close(): void;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private read(arg0: number): number;
}