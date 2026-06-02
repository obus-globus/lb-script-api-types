import type { ModuleBetterTab$Highlight$HighlightColored } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBetterTab$Highlight$HighlightColored.d.ts'
import type { PlayerFilter } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/PlayerFilter.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ModuleBetterTab$Highlight$Others extends ModuleBetterTab$Highlight$HighlightColored {
    constructor(color: Color4b)
    readonly filter: PlayerFilter;
}