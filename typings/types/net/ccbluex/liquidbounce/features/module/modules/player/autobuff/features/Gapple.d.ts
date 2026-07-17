import type { Continuation } from '../../../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeybindIsPressedEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/KeybindIsPressedEvent.d.ts'
import type { HealthBasedBuff } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/HealthBasedBuff.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Gapple extends HealthBasedBuff {
    static INSTANCE: Gapple;
    // private enchanted: boolean;
    // private /*not mapped: */ getEnchanted(): boolean;
    // private forceUseKey: boolean;
    // private keyBindIsPressedHandler: EventHook<KeybindIsPressedEvent>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    execute(slot: HotbarItemSlot, $completion: Continuation<void>): any;
    isValidItem(stack: ItemStack, forUse: boolean): boolean;
    onDisabled(): void;
}