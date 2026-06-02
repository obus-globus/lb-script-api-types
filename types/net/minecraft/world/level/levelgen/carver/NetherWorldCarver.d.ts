import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { CarvingMask } from '../../../../../../net/minecraft/world/level/chunk/CarvingMask.d.ts'
import type { ChunkAccess } from '../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { Aquifer } from '../../../../../../net/minecraft/world/level/levelgen/Aquifer.d.ts'
import type { CanyonCarverConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/carver/CanyonCarverConfiguration.d.ts'
import type { CarvingContext } from '../../../../../../net/minecraft/world/level/levelgen/carver/CarvingContext.d.ts'
import type { CaveCarverConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/carver/CaveCarverConfiguration.d.ts'
import type { CaveWorldCarver } from '../../../../../../net/minecraft/world/level/levelgen/carver/CaveWorldCarver.d.ts'
import type { WorldCarver } from '../../../../../../net/minecraft/world/level/levelgen/carver/WorldCarver.d.ts'
import type { MutableBoolean } from '../../../../../../org/apache/commons/lang3/mutable/MutableBoolean.d.ts'
export class NetherWorldCarver extends CaveWorldCarver {
    static CANYON: WorldCarver<CanyonCarverConfiguration>;
    static CAVE: WorldCarver<CaveCarverConfiguration>;
    static NETHER_CAVE: WorldCarver<CaveCarverConfiguration>;
    constructor(configurationFactory: Codec<CaveCarverConfiguration>)
    carveBlock(context: CarvingContext, configuration: CaveCarverConfiguration, chunk: ChunkAccess, biomeGetter: (param0: BlockPos) => Holder<Biome>, mask: CarvingMask, blockPos: BlockPos$MutableBlockPos, helperPos: BlockPos$MutableBlockPos, aquifer: Aquifer, hasGrass: MutableBoolean): boolean;
    getCaveBound(): number;
    getThickness(random: RandomSource): number;
    getYScale(): number;
}