import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleAutoShoot$ThrowableTypeMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoShoot$ThrowableTypeMode.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
export class ModuleAutoShoot$EggAndSnowball extends ModuleAutoShoot$ThrowableTypeMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleAutoShoot$EggAndSnowball;
    findSlot(): HotbarItemSlot | null;
}