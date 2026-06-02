import type { IntIterator } from '../../../../../../../it/unimi/dsi/fastutil/ints/IntIterator.d.ts'
import type { LongIterator } from '../../../../../../../it/unimi/dsi/fastutil/longs/LongIterator.d.ts'
import type { BitSet } from '../../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ChunkAccess } from '../../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
export class FixedChunkAccessSectionBitBuffer extends Object {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    constructor(arg0: BlockPos, arg1: number, arg2: number)
    chunkAccesses: ChunkAccess[];
    chunkSectionBits: BitSet;
    numChunks: number;
    numSections: number;
    xLength: number;
    xMin: number;
    yLength: number;
    yMin: number;
    zLength: number;
    zMin: number;
    getChunkAccess(arg0: number): ChunkAccess;
    getChunkAccess(arg0: BlockPos): ChunkAccess;
    getChunkIndex(arg0: number, arg1: number): number;
    getChunkIndex(arg0: number): number;
    getChunkPosInRange(): number[];
    getChunkPosInRangeIterator(): LongIterator;
    getChunkSectionBit(arg0: number, arg1: number, arg2: number): boolean;
    getChunkSectionBit(arg0: BlockPos): boolean;
    getSectionIndex(arg0: number, arg1: number, arg2: number): number;
    getSectionIndex(arg0: number): number;
    getSectionYInRange(): number[];
    getSectionYInRangeIterator(): IntIterator;
    hasNoTrueChunkSections(): boolean;
    setChunkAccess(arg0: number, arg1: ChunkAccess): void;
    setChunkAccess(arg0: BlockPos, arg1: ChunkAccess): void;
    setChunkSectionStatus(arg0: number, arg1: boolean): void;
}