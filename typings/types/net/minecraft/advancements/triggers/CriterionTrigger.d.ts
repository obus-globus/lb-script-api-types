import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CriterionTriggerInstance } from '../../../../net/minecraft/advancements/CriterionTriggerInstance.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
export interface CriterionTrigger<T extends CriterionTriggerInstance> extends Object{
    codec(): Codec<T>;
    createCriterion(instance: T): Criterion<T>;
}