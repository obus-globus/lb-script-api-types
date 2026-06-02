import type { FilterInputStream } from '../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LZ4FrameOutputStream$FrameInfo } from '../../../net/jpountz/lz4/LZ4FrameOutputStream$FrameInfo.d.ts'
import type { LZ4SafeDecompressor } from '../../../net/jpountz/lz4/LZ4SafeDecompressor.d.ts'
import type { XXHash32 } from '../../../net/jpountz/xxhash/XXHash32.d.ts'
export class LZ4FrameInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
    constructor(arg0: InputStream, arg1: LZ4SafeDecompressor, arg2: XXHash32)
    constructor(arg0: InputStream, arg1: LZ4SafeDecompressor, arg2: XXHash32, arg3: boolean)
    // private buffer: ByteBuffer;
    // private checksum: XXHash32;
    // private compressedBuffer: number[];
    // private decompressor: LZ4SafeDecompressor;
    readonly expectedContentSize: number;
    // private firstFrameHeaderRead: boolean;
    // private frameInfo: LZ4FrameOutputStream$FrameInfo;
    // private headerArray: number[];
    // private headerBuffer: ByteBuffer;
    // private maxBlockSize: number;
    // private rawBuffer: number[];
    // private readNumberBuff: ByteBuffer;
    // private readSingleFrame: boolean;
    // private totalContentSize: number;
    available(): number;
    close(): void;
    getExpectedContentSize(): number;
    isExpectedContentSizeDefined(): boolean;
    mark(arg0: number): void;
    markSupported(): boolean;
    // private nextFrameInfo(): boolean;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readBlock(): void;
    // private readHeader(): void;
    // private readInt(arg0: InputStream): number;
    // private readLong(arg0: InputStream): number;
    reset(): void;
    skip(arg0: number): number;
    // private skippableFrame(): void;
}