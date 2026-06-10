import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { CriterionTrigger } from '../../../../net/minecraft/advancements/CriterionTrigger.d.ts'
import type { CriterionTrigger$Listener } from '../../../../net/minecraft/advancements/CriterionTrigger$Listener.d.ts'
import type { ImpossibleTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/ImpossibleTrigger$TriggerInstance.d.ts'
import type { PlayerAdvancements } from '../../../../net/minecraft/server/PlayerAdvancements.d.ts'
export class ImpossibleTrigger extends Object implements CriterionTrigger<ImpossibleTrigger$TriggerInstance> {
    constructor()
    addPlayerListener(player: PlayerAdvancements, listener: CriterionTrigger$Listener<ImpossibleTrigger$TriggerInstance>): void;
    codec(): Codec<ImpossibleTrigger$TriggerInstance>;
    createCriterion(instance: ImpossibleTrigger$TriggerInstance): Criterion<ImpossibleTrigger$TriggerInstance>;
    removePlayerListener(player: PlayerAdvancements, listener: CriterionTrigger$Listener<ImpossibleTrigger$TriggerInstance>): void;
    removePlayerListeners(player: PlayerAdvancements): void;
}