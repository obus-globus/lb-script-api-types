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
import type { BehaviorBuilder$Mu } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/BehaviorBuilder$Mu.d.ts'
import type { Trigger } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/Trigger.d.ts'
export class BehaviorBuilder$Constant<E extends LivingEntity, A extends unknown> extends BehaviorBuilder<E, A> {
    static create<E extends LivingEntity>(parambuilder: (param0: BehaviorBuilder$Instance<E>) => App<BehaviorBuilder$Mu<E>, Trigger<E>>): OneShot<E>;
    static instance<E extends LivingEntity>(): BehaviorBuilder$Instance<E>;
    static sequence<E extends LivingEntity>(paramfirst: Trigger<any>, paramsecond: OneShot<any>): OneShot<E>;
    static triggerIf<E extends LivingEntity>(parampredicate: (param0: ServerLevel, param1: E) => boolean): OneShot<E>;
    static triggerIf<E extends LivingEntity>(parampredicate: (param0: E) => boolean): OneShot<E>;
    static triggerIf<E extends LivingEntity>(parampredicate: (param0: E) => boolean, parambehavior: OneShot<any>): OneShot<E>;
    static unbox<E extends LivingEntity, M extends unknown>(parambox: App<BehaviorBuilder$Mu<E>, M>): BehaviorBuilder<E, M>;
    private constructor(a: A)
    private constructor(a: A, debugString: () => string)
}