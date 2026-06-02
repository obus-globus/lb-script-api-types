import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { BlockInputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/BlockInputStream.d.ts'
import type { SeekableInputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/SeekableInputStream.d.ts'
import type { Check } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/check/Check.d.ts'
import type { BlockInfo } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/index/BlockInfo.d.ts'
import type { IndexDecoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/index/IndexDecoder.d.ts'
export class SeekableXZInputStream extends SeekableInputStream {
    static nullInputStream(): InputStream;
    constructor(in_: SeekableInputStream)
    constructor(in_: SeekableInputStream, memoryLimit: number)
    constructor(in_: SeekableInputStream, memoryLimit: number, verifyCheck: boolean)
    constructor(in_: SeekableInputStream, memoryLimit: number, verifyCheck: boolean, arrayCache: ArrayCache)
    constructor(in_: SeekableInputStream, memoryLimit: number, arrayCache: ArrayCache)
    constructor(in_: SeekableInputStream, arrayCache: ArrayCache)
    // private arrayCache: ArrayCache;
    readonly blockCount: number;
    // private blockDecoder: BlockInputStream;
    // private check: Check;
    readonly checkTypes: number;
    // private curBlockInfo: BlockInfo;
    // private curPos: number;
    // private endReached: boolean;
    // private exception: IOException;
    // private in: SeekableInputStream;
    readonly indexMemoryUsage: number;
    readonly largestBlockSize: number;
    // private memoryLimit: number;
    // private queriedBlockInfo: BlockInfo;
    // private seekNeeded: boolean;
    // private seekPos: number;
    // private streams: IndexDecoder[];
    // private tempBuf: number[];
    // private uncompressedSize: number;
    // private verifyCheck: boolean;
    available(): number;
    close(): void;
    close(closeInput: boolean): void;
    getBlockCheckType(blockNumber: number): number;
    getBlockCompPos(blockNumber: number): number;
    getBlockCompSize(blockNumber: number): number;
    getBlockCount(): number;
    getBlockNumber(pos: number): number;
    getBlockPos(blockNumber: number): number;
    getBlockSize(blockNumber: number): number;
    getCheckTypes(): number;
    getIndexMemoryUsage(): number;
    getLargestBlockSize(): number;
    getStreamCount(): number;
    // private initBlockDecoder(): void;
    length(): number;
    // private locateBlockByNumber(info: BlockInfo, blockNumber: number): void;
    // private locateBlockByPos(info: BlockInfo, pos: number): void;
    position(): number;
    read(): number;
    read(buf: number[], off: number, len: number): number;
    // private seek(): void;
    seek(pos: number): void;
    seekToBlock(blockNumber: number): void;
}