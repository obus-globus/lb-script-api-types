import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
import type { SurfaceRules$SurfaceRule } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$SurfaceRule.d.ts'
export interface SurfaceRules$RuleSource extends Function<SurfaceRules$Context, SurfaceRules$SurfaceRule>, Object {
    andThen<V extends unknown>(arg0: (param0: SurfaceRules$SurfaceRule) => V): (param0: SurfaceRules$Context) => V;
    codec(): MapCodec<SurfaceRules$RuleSource>;
    compose<V extends unknown>(arg0: (param0: V) => SurfaceRules$Context): (param0: V) => SurfaceRules$SurfaceRule;
}