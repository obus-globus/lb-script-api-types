import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FixedChunkAccessSectionBitBuffer } from '../../../../../../../net/caffeinemc/mods/lithium/common/util/collections/FixedChunkAccessSectionBitBuffer.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess } from '../../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
export class CheckAndCacheBlockChecker extends Object {
    constructor(arg0: BlockPos, arg1: number, arg2: number, arg3: LevelReader, arg4: (param0: BlockState) => boolean, arg5: boolean)
    blockStatePredicate: (param0: BlockState) => boolean;
    // private chunkSections2MaybeContainsMatchingBlock: FixedChunkAccessSectionBitBuffer;
    // private levelReader: LevelReader;
    minSectionY: number;
    shouldChunkLoad: boolean;
    // private unloadedPossibleChunkSections: number;
    checkCachedSection(arg0: number, arg1: number, arg2: number): boolean;
    // private checkChunkSection(arg0: ChunkAccess, arg1: number, arg2: number, arg3: number): boolean;
    checkPosition(arg0: BlockPos): boolean;
    getCachedChunkAccess(arg0: number): ChunkAccess;
    getCachedChunkAccess(arg0: BlockPos): ChunkAccess;
    getChunkSize(): number;
    hasUnloadedPossibleChunks(): boolean;
    initializeChunks(): void;
    initializeChunks(arg0: (param0: number) => void): void;
    shouldStop(): boolean;
}