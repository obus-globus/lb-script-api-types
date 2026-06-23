import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { SurfaceRules$Condition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Condition.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
export interface SurfaceRules$ConditionSource extends Function<SurfaceRules$Context, SurfaceRules$Condition>, Object {
    andThen<V extends unknown>(arg0: (param0: SurfaceRules$Condition) => V): (param0: SurfaceRules$Context) => V;
    codec(): KeyDispatchDataCodec<SurfaceRules$ConditionSource>;
    compose<V extends unknown>(arg0: (param0: V) => SurfaceRules$Context): (param0: V) => SurfaceRules$Condition;
}