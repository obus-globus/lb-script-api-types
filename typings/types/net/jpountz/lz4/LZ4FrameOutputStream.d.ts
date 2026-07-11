import type { FilterOutputStream } from '../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LZ4Compressor } from '../../../net/jpountz/lz4/LZ4Compressor.d.ts'
import type { LZ4FrameOutputStream$BLOCKSIZE } from '../../../net/jpountz/lz4/LZ4FrameOutputStream$BLOCKSIZE.d.ts'
import type { LZ4FrameOutputStream$FLG$Bits } from '../../../net/jpountz/lz4/LZ4FrameOutputStream$FLG$Bits.d.ts'
import type { LZ4FrameOutputStream$FrameInfo } from '../../../net/jpountz/lz4/LZ4FrameOutputStream$FrameInfo.d.ts'
import type { XXHash32 } from '../../../net/jpountz/xxhash/XXHash32.d.ts'
export class LZ4FrameOutputStream extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: LZ4FrameOutputStream$BLOCKSIZE)
    constructor(arg0: OutputStream, arg1: LZ4FrameOutputStream$BLOCKSIZE, ...arg2: LZ4FrameOutputStream$FLG$Bits[])
    constructor(arg0: OutputStream, arg1: LZ4FrameOutputStream$BLOCKSIZE, arg2: number, ...arg3: LZ4FrameOutputStream$FLG$Bits[])
    constructor(arg0: OutputStream, arg1: LZ4FrameOutputStream$BLOCKSIZE, arg2: number, arg3: LZ4Compressor, arg4: XXHash32, ...arg5: LZ4FrameOutputStream$FLG$Bits[])
    // private buffer: ByteBuffer;
    // private checksum: XXHash32;
    // private compressedBuffer: number[];
    // private compressor: LZ4Compressor;
    // private frameInfo: LZ4FrameOutputStream$FrameInfo;
    // private intLEBuffer: ByteBuffer;
    // private knownSize: number;
    // private maxBlockSize: number;
    close(): void;
    // private ensureNotFinished(): void;
    flush(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private writeBlock(): void;
    // private writeEndMark(): void;
    // private writeHeader(): void;
}