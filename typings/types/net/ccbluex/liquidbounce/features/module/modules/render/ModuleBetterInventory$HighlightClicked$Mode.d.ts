import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Slot } from '../../../../../../../net/minecraft/world/inventory/Slot.d.ts'
export class ModuleBetterInventory$HighlightClicked$Mode extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(choiceName: string)
    readonly parent: ModeValueGroup<any>;
    drawHighlightSlot(context: GuiGraphicsExtractor, slot: Slot): void;
}