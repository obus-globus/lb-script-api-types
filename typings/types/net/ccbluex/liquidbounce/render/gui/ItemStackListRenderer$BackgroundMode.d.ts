import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ItemStackListRenderer$BackgroundMode$Companion } from '../../../../../net/ccbluex/liquidbounce/render/gui/ItemStackListRenderer$BackgroundMode$Companion.d.ts'
export class ItemStackListRenderer$BackgroundMode extends Mode {
    static Companion: Tagged$Companion;
    static Companion: ItemStackListRenderer$BackgroundMode$Companion;
    static backgroundChoices$liquidbounce(paramarg0: ModeValueGroup<any>): (Object | null)[];
    protected constructor(name: string, parent: ModeValueGroup<any>)
    readonly parent: ModeValueGroup<any>;
}