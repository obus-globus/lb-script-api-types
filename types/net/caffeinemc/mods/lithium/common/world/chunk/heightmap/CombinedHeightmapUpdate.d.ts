import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelChunk } from '../../../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { Heightmap } from '../../../../../../../../net/minecraft/world/level/levelgen/Heightmap.d.ts'
export class CombinedHeightmapUpdate extends Object {
    static updateHeightmaps(paramarg0: Heightmap, paramarg1: Heightmap, paramarg2: Heightmap, paramarg3: Heightmap, paramarg4: LevelChunk, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: BlockState): void;
    constructor()
}