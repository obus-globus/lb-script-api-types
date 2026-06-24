import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { SurfaceRules$Condition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Condition.d.ts'
import type { SurfaceRules$ConditionSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$ConditionSource.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
export class SurfaceRules$BiomeConditionSource extends Record implements SurfaceRules$ConditionSource {
    static CODEC: Codec<SurfaceRules$ConditionSource>;
    static bootstrap(paramregistry: MapCodec<SurfaceRules$ConditionSource>[]): MapCodec<SurfaceRules$ConditionSource>;
    private constructor(biomes: Holder<Biome>[])
    // private biomes: Holder<Biome>[];
    apply(ruleContext: SurfaceRules$Context): SurfaceRules$Condition;
    biomes(): Holder<Biome>[];
    // private canNeverMatch(possibleBiomes: Holder<Biome>[]): boolean;
    codec(): MapCodec<SurfaceRules$BiomeConditionSource>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    // private willAlwaysMatch(possibleBiomes: Holder<Biome>[]): boolean;
}