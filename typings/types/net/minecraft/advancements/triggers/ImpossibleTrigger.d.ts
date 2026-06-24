import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { CriterionTrigger } from '../../../../net/minecraft/advancements/triggers/CriterionTrigger.d.ts'
import type { ImpossibleTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/triggers/ImpossibleTrigger$TriggerInstance.d.ts'
export class ImpossibleTrigger extends Object implements CriterionTrigger<ImpossibleTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<ImpossibleTrigger$TriggerInstance>;
    createCriterion(instance: ImpossibleTrigger$TriggerInstance): Criterion<ImpossibleTrigger$TriggerInstance>;
}