import type { SeekableInputStream } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/SeekableInputStream.d.ts'
import type { StreamFlags } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/common/StreamFlags.d.ts'
import type { BlockInfo } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/index/BlockInfo.d.ts'
import type { IndexBase } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/index/IndexBase.d.ts'
export class IndexDecoder extends IndexBase {
    constructor(in_: SeekableInputStream, streamFooterFlags: StreamFlags, streamPadding: number, memoryLimit: number)
    // private compressedOffset: number;
    readonly largestBlockSize: number;
    readonly memoryUsage: number;
    // private recordOffset: number;
    readonly streamFlags: StreamFlags;
    // private streamPadding: number;
    // private uncompressed: number[];
    // private uncompressedOffset: number;
    // private unpadded: number[];
    getLargestBlockSize(): number;
    getMemoryUsage(): number;
    getRecordCount(): number;
    getStreamFlags(): StreamFlags;
    getUncompressedSize(): number;
    hasRecord(blockNumber: number): boolean;
    hasUncompressedOffset(pos: number): boolean;
    locateBlock(info: BlockInfo, target: number): void;
    setBlockInfo(info: BlockInfo, blockNumber: number): void;
    setOffsets(prev: IndexDecoder): void;
}