import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ModuleBlink$ResetAction } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/ModuleBlink$ResetAction.d.ts'
export class ModuleBlink$AutoResetOption extends ToggleableValueGroup {
    static INSTANCE: ModuleBlink$AutoResetOption;
    readonly action: ModuleBlink$ResetAction;
    readonly resetAfter: number;
}