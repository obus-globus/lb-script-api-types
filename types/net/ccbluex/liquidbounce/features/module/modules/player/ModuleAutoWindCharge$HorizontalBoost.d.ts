import type { InputConstants$Key } from '../../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ModuleAutoWindCharge$HorizontalBoost extends ToggleableValueGroup {
    static INSTANCE: ModuleAutoWindCharge$HorizontalBoost;
    readonly boostKey: InputConstants$Key;
    readonly pitch: number;
}