import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ModuleBetterTab$Highlight$HighlightColored } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBetterTab$Highlight$HighlightColored.d.ts'
import type { ModuleBetterTab$Highlight$Others } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBetterTab$Highlight$Others.d.ts'
export class ModuleBetterTab$Highlight extends ToggleableValueGroup {
    static INSTANCE: ModuleBetterTab$Highlight;
    readonly friends: ModuleBetterTab$Highlight$HighlightColored;
    readonly others: ModuleBetterTab$Highlight$Others;
    readonly self: ModuleBetterTab$Highlight$HighlightColored;
}