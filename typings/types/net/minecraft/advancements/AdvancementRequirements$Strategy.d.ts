import type { Object } from '../../../java/lang/Object.d.ts'
import type { AdvancementRequirements } from '../../../net/minecraft/advancements/AdvancementRequirements.d.ts'
export interface AdvancementRequirements$Strategy extends Object{
    create(criteria: string[]): AdvancementRequirements;
}