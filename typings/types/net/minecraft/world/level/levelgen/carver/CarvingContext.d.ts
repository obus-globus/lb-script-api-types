import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { LevelHeightAccessor } from '../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess } from '../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { NoiseBasedChunkGenerator } from '../../../../../../net/minecraft/world/level/levelgen/NoiseBasedChunkGenerator.d.ts'
import type { NoiseChunk } from '../../../../../../net/minecraft/world/level/levelgen/NoiseChunk.d.ts'
import type { RandomState } from '../../../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { SurfaceRules$RuleSource } from '../../../../../../net/minecraft/world/level/levelgen/SurfaceRules$RuleSource.d.ts'
import type { WorldGenerationContext } from '../../../../../../net/minecraft/world/level/levelgen/WorldGenerationContext.d.ts'
export class CarvingContext extends WorldGenerationContext {
    constructor(generator: NoiseBasedChunkGenerator, registryAccess: RegistryAccess, heightAccessor: LevelHeightAccessor, noiseChunk: NoiseChunk, randomState: RandomState, surfaceRule: SurfaceRules$RuleSource)
    // private noiseChunk: NoiseChunk;
    // private randomState: RandomState;
    // private registryAccess: RegistryAccess;
    // private surfaceRule: SurfaceRules$RuleSource;
    randomState(): RandomState;
    registryAccess(): RegistryAccess;
    topMaterial(biomeGetter: (param0: BlockPos) => Holder<Biome>, chunk: ChunkAccess, pos: BlockPos, underFluid: boolean): Optional<BlockState>;
}