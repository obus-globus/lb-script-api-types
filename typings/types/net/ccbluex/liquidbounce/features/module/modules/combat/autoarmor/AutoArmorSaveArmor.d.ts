import type { Continuation } from '../../../../../../../../kotlin/coroutines/Continuation.d.ts'
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
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private closeInventory(hasArmorToEquip: boolean, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private openInventory(hasArmorToReplace: boolean, $completion: Continuation<void>): any;
}