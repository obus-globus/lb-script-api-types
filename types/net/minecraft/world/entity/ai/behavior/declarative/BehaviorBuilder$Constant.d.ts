import type { App } from '../../../../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { BiPredicate } from '../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { OneShot } from '../../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
import type { BehaviorBuilder } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/BehaviorBuilder.d.ts'
import type { BehaviorBuilder$Instance } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/BehaviorBuilder$Instance.d.ts'
import type { Trigger } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/Trigger.d.ts'
export class BehaviorBuilder$Constant<E extends LivingEntity, A extends Object | number | string | boolean> extends BehaviorBuilder<E, A> {
    static create(parambuilder: (param0: Object | null) => Object | null): OneShot<Object>;
    static instance(): BehaviorBuilder$Instance<Object>;
    static sequence(paramfirst: Trigger<Object>, paramsecond: OneShot<Object>): OneShot<Object>;
    static triggerIf(parampredicate: (param0: ServerLevel, param1: Object | null) => kotlin.Boolean): OneShot<Object>;
    static triggerIf(parampredicate: (param0: Object | null) => kotlin.Boolean): OneShot<Object>;
    static triggerIf(parampredicate: (param0: Object | null) => kotlin.Boolean, parambehavior: OneShot<Object>): OneShot<Object>;
    static unbox(parambox: App<Object, Object>): BehaviorBuilder<Object, Object>;
    private constructor(a: A)
    private constructor(a: A, debugString: () => string)
}