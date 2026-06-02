import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ModuleAnimations$EquipOffset$Ignores } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleAnimations$EquipOffset$Ignores.d.ts'
export class ModuleAnimations$EquipOffset extends ToggleableValueGroup {
    static INSTANCE: ModuleAnimations$EquipOffset;
    // private ignore: ModuleAnimations$EquipOffset$Ignores[];
    // private /*not mapped: */ getIgnore(): ModuleAnimations$EquipOffset$Ignores[];
    readonly ignoreAmount: boolean;
    readonly ignoreBlocking: boolean;
    readonly ignorePlace: boolean;
}