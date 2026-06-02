import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeSource } from '../../../../../net/minecraft/world/level/biome/BiomeSource.d.ts'
import type { Climate$Sampler } from '../../../../../net/minecraft/world/level/biome/Climate$Sampler.d.ts'
export class TheEndBiomeSource extends BiomeSource {
    static CODEC: MapCodec<TheEndBiomeSource>;
    static CODEC: Codec<BiomeSource>;
    static create(parambiomes: HolderGetter<Biome>): TheEndBiomeSource;
    private constructor(end: Holder<Biome>, highlands: Holder<Biome>, midlands: Holder<Biome>, islands: Holder<Biome>, barrens: Holder<Biome>)
    // private barrens: Holder<Biome>;
    // private biomeSetModified: boolean;
    // private end: Holder<Biome>;
    // private hasCheckedForModifiedSet: boolean;
    // private highlands: Holder<Biome>;
    // private islands: Holder<Biome>;
    // private midlands: Holder<Biome>;
    // private overrides: () => Object;
    codec(): MapCodec<BiomeSource>;
    collectPossibleBiomes(): Stream<Holder<Biome>>;
    getNoiseBiome(quartX: number, quartY: number, quartZ: number, sampler: Climate$Sampler): Holder<Biome>;
    modifyBiomeSet(arg0: (Object | null)[]): (Object | null)[];
}