import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { PlayerInventoryConstraints } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/PlayerInventoryConstraints.d.ts'
export class ElytraFlyModeFirework$ConsiderInventory extends ToggleableValueGroup {
    static INSTANCE: ElytraFlyModeFirework$ConsiderInventory;
    readonly constraints: PlayerInventoryConstraints;
}