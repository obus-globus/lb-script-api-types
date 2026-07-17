import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ModuleBetterInventory$CooldownProgressMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleBetterInventory$CooldownProgressMode.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ModuleBetterInventory$TextCooldownProgress extends ToggleableValueGroup {
    static INSTANCE: ModuleBetterInventory$TextCooldownProgress;
    readonly color: Color4b;
    getColor(): Color4b;
    readonly mode: ModuleBetterInventory$CooldownProgressMode;
    readonly scale: number;
}