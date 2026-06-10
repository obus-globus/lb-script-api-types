import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TheEndBiomeData$Overrides } from '../../../../../net/fabricmc/fabric/impl/biome/TheEndBiomeData$Overrides.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class TheEndBiomeData extends Object {
    static ADDED_BIOMES: ResourceKey<Biome>[];
    static biomeRegistry: ThreadLocal<HolderGetter<Biome>>;
    static addEndBarrensReplacement(paramarg0: ResourceKey<Biome>, paramarg1: ResourceKey<Biome>, paramarg2: number): void;
    static addEndBiomeReplacement(paramarg0: ResourceKey<Biome>, paramarg1: ResourceKey<Biome>, paramarg2: number): void;
    static addEndMidlandsReplacement(paramarg0: ResourceKey<Biome>, paramarg1: ResourceKey<Biome>, paramarg2: number): void;
    static createOverrides(paramarg0: HolderGetter<Biome>): TheEndBiomeData$Overrides;
    private constructor()
}