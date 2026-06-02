import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { CriterionTrigger } from '../../../../net/minecraft/advancements/CriterionTrigger.d.ts'
import type { CriterionTrigger$Listener } from '../../../../net/minecraft/advancements/CriterionTrigger$Listener.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { PlayerAdvancements } from '../../../../net/minecraft/server/PlayerAdvancements.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export abstract class SimpleCriterionTrigger<T extends SimpleCriterionTrigger$SimpleInstance> extends Object implements CriterionTrigger<T> {
    constructor()
    // private players: Map<PlayerAdvancements, CriterionTrigger$Listener<T>[]>;
    addPlayerListener(player: PlayerAdvancements, listener: CriterionTrigger$Listener<T>): void;
    createCriterion(instance: T): Criterion<T>;
    removePlayerListener(player: PlayerAdvancements, listener: CriterionTrigger$Listener<T>): void;
    removePlayerListeners(player: PlayerAdvancements): void;
    trigger(player: ServerPlayer, matcher: (param0: T) => kotlin.Boolean): void;
}