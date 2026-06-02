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
import type { WorldCarver$CarveSkipChecker } from '../../../../../../net/minecraft/world/level/levelgen/carver/WorldCarver$CarveSkipChecker.d.ts'
export class CaveWorldCarver extends WorldCarver<CaveCarverConfiguration> {
    static CANYON: WorldCarver<CanyonCarverConfiguration>;
    static CAVE: WorldCarver<CaveCarverConfiguration>;
    static NETHER_CAVE: WorldCarver<CaveCarverConfiguration>;
    constructor(configurationFactory: Codec<CaveCarverConfiguration>)
    carve(context: CarvingContext, configuration: CaveCarverConfiguration, chunk: ChunkAccess, biomeGetter: (param0: BlockPos) => Holder<Biome>, random: RandomSource, aquifer: Aquifer, sourceChunkPos: ChunkPos, mask: CarvingMask): boolean;
    createRoom(context: CarvingContext, configuration: CaveCarverConfiguration, chunk: ChunkAccess, biomeGetter: (param0: BlockPos) => Holder<Biome>, aquifer: Aquifer, x: number, y: number, z: number, thickness: number, yScale: number, mask: CarvingMask, skipChecker: WorldCarver$CarveSkipChecker): void;
    createTunnel(context: CarvingContext, configuration: CaveCarverConfiguration, chunk: ChunkAccess, biomeGetter: (param0: BlockPos) => Holder<Biome>, tunnelSeed: number, aquifer: Aquifer, x: number, y: number, z: number, horizontalRadiusMultiplier: number, verticalRadiusMultiplier: number, thickness: number, horizontalRotation: number, verticalRotation: number, step: number, dist: number, yScale: number, mask: CarvingMask, skipChecker: WorldCarver$CarveSkipChecker): void;
    getCaveBound(): number;
    getThickness(random: RandomSource): number;
    getYScale(): number;
    isStartChunk(configuration: CaveCarverConfiguration, random: RandomSource): boolean;
}