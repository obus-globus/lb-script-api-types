import type { File } from '../../../../../../java/io/File.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { SeekableByteChannel } from '../../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { OpenOption } from '../../../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { MultiReadOnlySeekableByteChannel } from '../../../../../../org/apache/commons/compress/utils/MultiReadOnlySeekableByteChannel.d.ts'
export class ZipSplitReadOnlySeekableByteChannel extends MultiReadOnlySeekableByteChannel {
    static buildFromLastSplitSegment(paramarg0: File): SeekableByteChannel;
    static buildFromLastSplitSegment(paramarg0: Path): SeekableByteChannel;
    static forFiles(paramarg0: File, paramarg1: File[]): SeekableByteChannel;
    static forFiles(...paramarg0: File[]): SeekableByteChannel;
    static forOrderedSeekableByteChannels(paramarg0: SeekableByteChannel, paramarg1: SeekableByteChannel[]): SeekableByteChannel;
    static forOrderedSeekableByteChannels(...paramarg0: SeekableByteChannel[]): SeekableByteChannel;
    static forPaths(paramarg0: Path, paramarg1: Path[]): SeekableByteChannel;
    static forPaths(...paramarg0: Path[]): SeekableByteChannel;
    static forPaths(paramarg0: Path[], paramarg1: OpenOption[]): SeekableByteChannel;
    static forSeekableByteChannels(...paramarg0: SeekableByteChannel[]): SeekableByteChannel;
    constructor(arg0: SeekableByteChannel[])
    // private zipSplitSignatureByteBuffer: ByteBuffer;
    // private assertSplitSignature(arg0: SeekableByteChannel[]): void;
}