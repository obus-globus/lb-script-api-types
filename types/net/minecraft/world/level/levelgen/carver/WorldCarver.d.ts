import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { CarvingMask } from '../../../../../../net/minecraft/world/level/chunk/CarvingMask.d.ts'
import type { ChunkAccess } from '../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { Aquifer } from '../../../../../../net/minecraft/world/level/levelgen/Aquifer.d.ts'
import type { CanyonCarverConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/carver/CanyonCarverConfiguration.d.ts'
import type { CarverConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/carver/CarverConfiguration.d.ts'
import type { CarvingContext } from '../../../../../../net/minecraft/world/level/levelgen/carver/CarvingContext.d.ts'
import type { CaveCarverConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/carver/CaveCarverConfiguration.d.ts'
import type { ConfiguredWorldCarver } from '../../../../../../net/minecraft/world/level/levelgen/carver/ConfiguredWorldCarver.d.ts'
import type { WorldCarver$CarveSkipChecker } from '../../../../../../net/minecraft/world/level/levelgen/carver/WorldCarver$CarveSkipChecker.d.ts'
import type { Fluid } from '../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { MutableBoolean } from '../../../../../../org/apache/commons/lang3/mutable/MutableBoolean.d.ts'
export abstract class WorldCarver<C extends CarverConfiguration> extends Object {
    static CANYON: WorldCarver<CanyonCarverConfiguration>;
    static CAVE: WorldCarver<CaveCarverConfiguration>;
    static NETHER_CAVE: WorldCarver<CaveCarverConfiguration>;
    constructor(codec: Codec<C>)
    // private configuredCodec: MapCodec<ConfiguredWorldCarver<C>>;
    // private liquids: Fluid[];
    canReplaceBlock(configuration: C, state: BlockState): boolean;
    carve(context: CarvingContext, configuration: C, chunk: ChunkAccess, biomeGetter: (param0: BlockPos) => Holder<Biome>, random: RandomSource, aquifer: Aquifer, sourceChunkPos: ChunkPos, mask: CarvingMask): boolean;
    carveBlock(context: CarvingContext, configuration: C, chunk: ChunkAccess, biomeGetter: (param0: BlockPos) => Holder<Biome>, mask: CarvingMask, blockPos: BlockPos$MutableBlockPos, helperPos: BlockPos$MutableBlockPos, aquifer: Aquifer, hasGrass: MutableBoolean): boolean;
    carveEllipsoid(context: CarvingContext, configuration: C, chunk: ChunkAccess, biomeGetter: (param0: BlockPos) => Holder<Biome>, aquifer: Aquifer, x: number, y: number, z: number, horizontalRadius: number, verticalRadius: number, mask: CarvingMask, skipChecker: WorldCarver$CarveSkipChecker): boolean;
    configured(configuration: C): ConfiguredWorldCarver<C>;
    configuredCodec(): MapCodec<ConfiguredWorldCarver<C>>;
    // private getCarveState(context: CarvingContext, configuration: C, blockPos: BlockPos, aquifer: Aquifer): BlockState;
    getRange(): number;
    isStartChunk(configuration: C, random: RandomSource): boolean;
}