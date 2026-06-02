import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ValidationContext } from '../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
export interface Validatable extends Object{
    validate(context: ValidationContext): void;
}