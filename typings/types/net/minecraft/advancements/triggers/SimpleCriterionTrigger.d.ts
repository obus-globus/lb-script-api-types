import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { CriterionTrigger } from '../../../../net/minecraft/advancements/triggers/CriterionTrigger.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export abstract class SimpleCriterionTrigger<T extends SimpleCriterionTrigger$SimpleInstance> extends Object implements CriterionTrigger<T> {
    constructor()
    createCriterion(instance: T): Criterion<T>;
    trigger(player: ServerPlayer, matcher: (param0: T) => boolean): void;
}