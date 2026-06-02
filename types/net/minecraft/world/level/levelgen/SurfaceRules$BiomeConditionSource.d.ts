import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { SurfaceRules$Condition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Condition.d.ts'
import type { SurfaceRules$ConditionSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$ConditionSource.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
export class SurfaceRules$BiomeConditionSource extends Object implements SurfaceRules$ConditionSource {
    static CODEC: Codec<SurfaceRules$ConditionSource>;
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    private constructor(biomes: ResourceKey<Biome>[])
    // private biomeNameTest: (param0: ResourceKey<Biome>) => kotlin.Boolean;
    // private biomes: ResourceKey<Biome>[];
    apply(ruleContext: SurfaceRules$Context): SurfaceRules$Condition;
    codec(): KeyDispatchDataCodec<SurfaceRules$ConditionSource>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}