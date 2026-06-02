import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { SeekableByteChannel } from '../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MultiReadOnlySeekableByteChannel extends Object implements SeekableByteChannel {
    static forFiles(paramarg0: (Object | null)[]): SeekableByteChannel;
    static forPaths(paramarg0: (Object | null)[]): SeekableByteChannel;
    static forSeekableByteChannels(paramarg0: (Object | null)[]): SeekableByteChannel;
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