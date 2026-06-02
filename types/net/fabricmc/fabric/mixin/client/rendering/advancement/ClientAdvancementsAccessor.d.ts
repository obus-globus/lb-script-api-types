import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementProgress } from '../../../../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
export interface ClientAdvancementsAccessor extends Object{
    fabric_getProgress(): Map<AdvancementHolder, AdvancementProgress>;
}