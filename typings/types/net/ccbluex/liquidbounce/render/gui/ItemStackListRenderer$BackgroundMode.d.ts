import type { Mode } from '../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ItemStackListRenderer$BackgroundMode$Companion } from '../../../../../net/ccbluex/liquidbounce/render/gui/ItemStackListRenderer$BackgroundMode$Companion.d.ts'
export class ItemStackListRenderer$BackgroundMode extends Mode {
    static Companion: ItemStackListRenderer$BackgroundMode$Companion;
    static backgroundChoices$net_ccbluex_liquidbounce(parent: ModeValueGroup<any>): ItemStackListRenderer$BackgroundMode[];
    protected constructor(name: string, parent: ModeValueGroup<any>)
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
}