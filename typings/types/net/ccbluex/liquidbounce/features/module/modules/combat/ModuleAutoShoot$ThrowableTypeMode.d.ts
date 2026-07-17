import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
export class ModuleAutoShoot$ThrowableTypeMode extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string, aliases: string[])
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    findSlot(): HotbarItemSlot | null;
}