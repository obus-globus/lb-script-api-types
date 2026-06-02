import type { InputConstants$Key } from '../../../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ModuleOffhand$Strength extends ToggleableValueGroup {
    static INSTANCE: ModuleOffhand$Strength;
    readonly onlyWhileHoldingSword: boolean;
    readonly onlyWhileKa: boolean;
    readonly strengthBind: InputConstants$Key;
}