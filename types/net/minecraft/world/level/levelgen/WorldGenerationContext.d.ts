import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { ChunkGenerator } from '../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
export class WorldGenerationContext extends Object {
    constructor(generator: ChunkGenerator, heightAccessor: LevelHeightAccessor)
    // private height: number;
    // private minY: number;
    getGenDepth(): number;
    getMinGenY(): number;
}