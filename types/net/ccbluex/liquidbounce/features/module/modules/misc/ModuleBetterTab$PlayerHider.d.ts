import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { PlayerFilter } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/PlayerFilter.d.ts'
export class ModuleBetterTab$PlayerHider extends ToggleableValueGroup {
    static INSTANCE: ModuleBetterTab$PlayerHider;
    readonly filter: PlayerFilter;
}