import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { SurfaceRules$Condition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Condition.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
export interface SurfaceRules$ConditionSource extends Function<SurfaceRules$Context, SurfaceRules$Condition>, Object {
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    codec(): KeyDispatchDataCodec<SurfaceRules$ConditionSource>;
    compose(arg0: (param0: V) => T): (param0: V) => R;
}