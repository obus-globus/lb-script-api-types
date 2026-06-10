import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { SurfaceRules$Condition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Condition.d.ts'
import type { SurfaceRules$ConditionSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$ConditionSource.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
export class SurfaceRules$WaterConditionSource extends Record implements SurfaceRules$ConditionSource {
    static CODEC: Codec<SurfaceRules$ConditionSource>;
    static bootstrap(paramregistry: MapCodec<SurfaceRules$ConditionSource>[]): MapCodec<SurfaceRules$ConditionSource>;
    // private addStoneDepth: boolean;
    // private offset: number;
    // private surfaceDepthMultiplier: number;
    addStoneDepth(): boolean;
    apply(ruleContext: SurfaceRules$Context): SurfaceRules$Condition;
    codec(): KeyDispatchDataCodec<SurfaceRules$ConditionSource>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    offset(): number;
    surfaceDepthMultiplier(): number;
    toString(): string;
}