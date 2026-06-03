import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { SeekableByteChannel } from '../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { BoundedArchiveInputStream } from '../../../../../org/apache/commons/compress/utils/BoundedArchiveInputStream.d.ts'
export class BoundedSeekableByteChannelInputStream extends BoundedArchiveInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: number, arg1: number, arg2: SeekableByteChannel)
    // private channel: SeekableByteChannel;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    read(arg0: number, arg1: ByteBuffer): number;
}