import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
import type { SurfaceRules$SurfaceRule } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$SurfaceRule.d.ts'
export interface SurfaceRules$RuleSource extends Function<SurfaceRules$Context, SurfaceRules$SurfaceRule>, Object{
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    codec(): KeyDispatchDataCodec<SurfaceRules$RuleSource>;
    compose(arg0: (param0: V) => T): (param0: V) => R;
}