import type { File } from '../../../../../java/io/File.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { SeekableByteChannel } from '../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MultiReadOnlySeekableByteChannel extends Object implements SeekableByteChannel {
    static forFiles(...paramarg0: File[]): SeekableByteChannel;
    static forPaths(...paramarg0: Path[]): SeekableByteChannel;
    static forSeekableByteChannels(...paramarg0: SeekableByteChannel[]): SeekableByteChannel;
    constructor(arg0: SeekableByteChannel[])
    // private channelList: SeekableByteChannel[];
    // private currentChannelIdx: number;
    // private globalPosition: number;
    close(): void;
    isOpen(): boolean;
    position(): number;
    position(arg0: number): SeekableByteChannel;
    position(arg0: number, arg1: number): SeekableByteChannel;
    read(arg0: ByteBuffer): number;
    size(): number;
    truncate(arg0: number): SeekableByteChannel;
    write(arg0: ByteBuffer): number;
}