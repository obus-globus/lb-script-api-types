import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SurfaceRules$ConditionSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$ConditionSource.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
import type { SurfaceRules$RuleSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$RuleSource.d.ts'
import type { SurfaceRules$SurfaceRule } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$SurfaceRule.d.ts'
export class SurfaceRules$TestRuleSource extends Record implements SurfaceRules$RuleSource {
    static CODEC: Codec<SurfaceRules$RuleSource>;
    static bootstrap(paramregistry: MapCodec<SurfaceRules$RuleSource>[]): MapCodec<SurfaceRules$RuleSource>;
    private constructor(ifTrue: SurfaceRules$ConditionSource, thenRun: SurfaceRules$RuleSource)
    // private ifTrue: SurfaceRules$ConditionSource;
    // private thenRun: SurfaceRules$RuleSource;
    apply(context: SurfaceRules$Context): SurfaceRules$SurfaceRule;
    codec(): MapCodec<SurfaceRules$TestRuleSource>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    ifTrue(): SurfaceRules$ConditionSource;
    thenRun(): SurfaceRules$RuleSource;
    toString(): string;
}