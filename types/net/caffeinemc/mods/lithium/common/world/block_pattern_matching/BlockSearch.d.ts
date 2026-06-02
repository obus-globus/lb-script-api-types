import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { LevelChunkSection } from '../../../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
export class BlockSearch extends Object {
    static countBlocksInBoxInSection(paramarg0: LevelChunkSection, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: Block, paramarg8: number): number;
    static hasAtLeast(paramarg0: LevelReader, paramarg1: BlockPos[], paramarg2: Block, paramarg3: number): boolean;
    constructor()
}