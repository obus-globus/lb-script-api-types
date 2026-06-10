import type { App } from '../../../../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { K1 } from '../../../../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { BiPredicate } from '../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { OneShot } from '../../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
import type { BehaviorBuilder } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/BehaviorBuilder.d.ts'
import type { BehaviorBuilder$Instance } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/BehaviorBuilder$Instance.d.ts'
import type { BehaviorBuilder$Mu } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/BehaviorBuilder$Mu.d.ts'
import type { MemoryAccessor } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/MemoryAccessor.d.ts'
import type { MemoryCondition } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/MemoryCondition.d.ts'
import type { Trigger } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/Trigger.d.ts'
export class BehaviorBuilder$PureMemory<E extends LivingEntity, F extends K1, Value extends Object | number | string | boolean> extends BehaviorBuilder<E, MemoryAccessor<F, Value>> {
    static create(parambuilder: (param0: BehaviorBuilder$Instance<LivingEntity>) => App<BehaviorBuilder$Mu<LivingEntity>, Trigger<LivingEntity>>): OneShot<LivingEntity>;
    static instance(): BehaviorBuilder$Instance<LivingEntity>;
    static sequence(paramfirst: Trigger<Object>, paramsecond: OneShot<Object>): OneShot<LivingEntity>;
    static triggerIf(parampredicate: (param0: ServerLevel, param1: LivingEntity | null) => boolean): OneShot<LivingEntity>;
    static triggerIf(parampredicate: (param0: LivingEntity | null) => boolean): OneShot<LivingEntity>;
    static triggerIf(parampredicate: (param0: LivingEntity | null) => boolean, parambehavior: OneShot<Object>): OneShot<LivingEntity>;
    static unbox(parambox: App<BehaviorBuilder$Mu<LivingEntity>, Object>): BehaviorBuilder<LivingEntity, Object>;
    private constructor(condition: MemoryCondition<F, Value>)
}