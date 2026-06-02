import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { SeekableByteChannel } from '../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleFile$ByteChannelDecorator extends Object implements SeekableByteChannel {
    constructor(delegate: SeekableByteChannel)
    // private delegate: SeekableByteChannel;
    close(): void;
    isOpen(): boolean;
    position(): number;
    position(newPosition: number): SeekableByteChannel;
    read(dst: ByteBuffer): number;
    size(): number;
    truncate(size: number): SeekableByteChannel;
    write(src: ByteBuffer): number;
}