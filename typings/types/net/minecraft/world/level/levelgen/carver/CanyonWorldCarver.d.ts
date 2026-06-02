import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { CarvingMask } from '../../../../../../net/minecraft/world/level/chunk/CarvingMask.d.ts'
import type { ChunkAccess } from '../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { Aquifer } from '../../../../../../net/minecraft/world/level/levelgen/Aquifer.d.ts'
import type { CanyonCarverConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/carver/CanyonCarverConfiguration.d.ts'
import type { CarvingContext } from '../../../../../../net/minecraft/world/level/levelgen/carver/CarvingContext.d.ts'
import type { CaveCarverConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/carver/CaveCarverConfiguration.d.ts'
import type { WorldCarver } from '../../../../../../net/minecraft/world/level/levelgen/carver/WorldCarver.d.ts'
export class CanyonWorldCarver extends WorldCarver<CanyonCarverConfiguration> {
    static CANYON: WorldCarver<CanyonCarverConfiguration>;
    static CAVE: WorldCarver<CaveCarverConfiguration>;
    static NETHER_CAVE: WorldCarver<CaveCarverConfiguration>;
    constructor(configurationFactory: Codec<CanyonCarverConfiguration>)
    carve(context: CarvingContext, configuration: CanyonCarverConfiguration, chunk: ChunkAccess, biomeGetter: (param0: BlockPos) => Holder<Biome>, random: RandomSource, aquifer: Aquifer, sourceChunkPos: ChunkPos, mask: CarvingMask): boolean;
    // private doCarve(context: CarvingContext, configuration: CanyonCarverConfiguration, chunk: ChunkAccess, biomeGetter: (param0: BlockPos) => Holder<Biome>, tunnelSeed: number, aquifer: Aquifer, x: number, y: number, z: number, thickness: number, horizontalRotation: number, verticalRotation: number, step: number, distance: number, yScale: number, mask: CarvingMask): void;
    // private initWidthFactors(context: CarvingContext, configuration: CanyonCarverConfiguration, random: RandomSource): number[];
    isStartChunk(configuration: CanyonCarverConfiguration, random: RandomSource): boolean;
    // private shouldSkip(context: CarvingContext, widthFactorPerHeight: number[], xd: number, yd: number, zd: number, y: number): boolean;
    // private updateVerticalRadius(configuration: CanyonCarverConfiguration, random: RandomSource, verticalRadius: number, distance: number, currentStep: number): number;
}