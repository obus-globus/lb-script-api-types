import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ModuleBetterInventory$HighlightClicked$Mode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleBetterInventory$HighlightClicked$Mode.d.ts'
export class ModuleBetterInventory$HighlightClicked extends ToggleableValueGroup {
    static INSTANCE: ModuleBetterInventory$HighlightClicked;
    readonly mode: ModeValueGroup<ModuleBetterInventory$HighlightClicked$Mode>;
}