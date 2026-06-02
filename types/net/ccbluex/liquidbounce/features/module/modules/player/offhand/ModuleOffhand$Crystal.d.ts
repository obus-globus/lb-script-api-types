import type { InputConstants$Key } from '../../../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ModuleOffhand$Crystal extends ToggleableValueGroup {
    static INSTANCE: ModuleOffhand$Crystal;
    readonly crystalBind: InputConstants$Key;
    readonly onlyWhileCa: boolean;
    readonly whenNoTotems: boolean;
}