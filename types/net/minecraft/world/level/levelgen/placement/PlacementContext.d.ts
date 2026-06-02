import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { CarvingMask } from '../../../../../../net/minecraft/world/level/chunk/CarvingMask.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { Heightmap$Types } from '../../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { WorldGenerationContext } from '../../../../../../net/minecraft/world/level/levelgen/WorldGenerationContext.d.ts'
import type { PlacedFeature } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class PlacementContext extends WorldGenerationContext {
    constructor(level: WorldGenLevel, generator: ChunkGenerator, topFeature: Optional<PlacedFeature>)
    // private generator: ChunkGenerator;
    readonly level: WorldGenLevel;
    // private topFeature: Optional<PlacedFeature>;
    generator(): ChunkGenerator;
    getBlockState(pos: BlockPos): BlockState;
    getCarvingMask(pos: ChunkPos): CarvingMask;
    getHeight(type: Heightmap$Types, x: number, z: number): number;
    getLevel(): WorldGenLevel;
    getMinY(): number;
    topFeature(): Optional<PlacedFeature>;
}