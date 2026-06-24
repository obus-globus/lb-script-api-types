import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SurfaceRules$Condition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Condition.d.ts'
import type { SurfaceRules$ConditionSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$ConditionSource.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
export class SurfaceRules$NotConditionSource extends Record implements SurfaceRules$ConditionSource {
    static CODEC: Codec<SurfaceRules$ConditionSource>;
    static bootstrap(paramregistry: MapCodec<SurfaceRules$ConditionSource>[]): MapCodec<SurfaceRules$ConditionSource>;
    private constructor(target: SurfaceRules$ConditionSource)
    // private target: SurfaceRules$ConditionSource;
    apply(context: SurfaceRules$Context): SurfaceRules$Condition;
    codec(): MapCodec<SurfaceRules$NotConditionSource>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    target(): SurfaceRules$ConditionSource;
    toString(): string;
}