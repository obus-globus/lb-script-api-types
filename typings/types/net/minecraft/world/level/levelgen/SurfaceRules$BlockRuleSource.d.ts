import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
import type { SurfaceRules$RuleSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$RuleSource.d.ts'
import type { SurfaceRules$StateRule } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$StateRule.d.ts'
import type { SurfaceRules$SurfaceRule } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$SurfaceRule.d.ts'
export class SurfaceRules$BlockRuleSource extends Record implements SurfaceRules$RuleSource {
    static CODEC: Codec<SurfaceRules$RuleSource>;
    static bootstrap(paramregistry: MapCodec<SurfaceRules$RuleSource>[]): MapCodec<SurfaceRules$RuleSource>;
    private constructor(state: BlockState)
    private constructor(resultState: BlockState, rule: SurfaceRules$StateRule)
    // private resultState: BlockState;
    // private rule: SurfaceRules$StateRule;
    apply(context: SurfaceRules$Context): SurfaceRules$SurfaceRule;
    codec(): KeyDispatchDataCodec<SurfaceRules$RuleSource>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    resultState(): BlockState;
    rule(): SurfaceRules$StateRule;
    toString(): string;
}