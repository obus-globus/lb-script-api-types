import type { Object } from '../../../java/lang/Object.d.ts'
import type { ValidationContextSource } from '../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export interface CriterionTriggerInstance extends Object{
    validate(validator: ValidationContextSource): void;
}