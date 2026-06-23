import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { CarvingMask } from '../../../../../../net/minecraft/world/level/chunk/CarvingMask.d.ts'
import type { ChunkAccess } from '../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { Aquifer } from '../../../../../../net/minecraft/world/level/levelgen/Aquifer.d.ts'
import type { CarverConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/carver/CarverConfiguration.d.ts'
import type { CarvingContext } from '../../../../../../net/minecraft/world/level/levelgen/carver/CarvingContext.d.ts'
import type { WorldCarver } from '../../../../../../net/minecraft/world/level/levelgen/carver/WorldCarver.d.ts'
export class ConfiguredWorldCarver<WC extends CarverConfiguration> extends Record {
    static CODEC: Codec<Holder<ConfiguredWorldCarver<any>>>;
    static DIRECT_CODEC: Codec<ConfiguredWorldCarver<any>>;
    static LIST_CODEC: Codec<Holder<ConfiguredWorldCarver<any>>[]>;
    constructor(worldCarver: WorldCarver<WC>, config: WC)
    // private config: WC;
    // private worldCarver: WorldCarver<WC>;
    carve(context: CarvingContext, chunk: ChunkAccess, biomeGetter: (param0: BlockPos) => Holder<Biome>, random: RandomSource, aquifer: Aquifer, sourceChunkPos: ChunkPos, mask: CarvingMask): boolean;
    config(): WC;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isStartChunk(random: RandomSource): boolean;
    toString(): string;
    worldCarver(): WorldCarver<WC>;
}