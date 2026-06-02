import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AdvancementProgress } from '../../../../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
export interface AdvancementWidgetAccessor extends Object{
    fabric_getProgress(): AdvancementProgress;
}