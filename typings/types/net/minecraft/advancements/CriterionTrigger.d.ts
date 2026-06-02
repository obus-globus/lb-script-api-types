import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../net/minecraft/advancements/Criterion.d.ts'
import type { CriterionTrigger$Listener } from '../../../net/minecraft/advancements/CriterionTrigger$Listener.d.ts'
import type { CriterionTriggerInstance } from '../../../net/minecraft/advancements/CriterionTriggerInstance.d.ts'
import type { PlayerAdvancements } from '../../../net/minecraft/server/PlayerAdvancements.d.ts'
export interface CriterionTrigger<T extends CriterionTriggerInstance> extends Object{
    addPlayerListener(player: PlayerAdvancements, listener: CriterionTrigger$Listener<T>): void;
    codec(): Codec<T>;
    createCriterion(instance: T): Criterion<T>;
    removePlayerListener(player: PlayerAdvancements, listener: CriterionTrigger$Listener<T>): void;
    removePlayerListeners(player: PlayerAdvancements): void;
}