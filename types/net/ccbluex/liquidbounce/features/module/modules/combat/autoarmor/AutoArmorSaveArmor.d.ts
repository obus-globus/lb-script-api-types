import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class AutoArmorSaveArmor extends ToggleableValueGroup {
    static INSTANCE: AutoArmorSaveArmor;
    // private armorAutoSaveHandler: EventHook<GameTickEvent>;
    // private autoOpen: boolean;
    // private /*not mapped: */ getAutoOpen(): boolean;
    readonly durabilityThreshold: number;
    // private hasOpenedInventory: boolean;
    // private prevArmor: number;
    // private /*not mapped: */ getShouldTrackArmor(): boolean;
    // private closeInventory(hasArmorToEquip: boolean): void;
    // private openInventory(hasArmorToReplace: boolean): void;
}