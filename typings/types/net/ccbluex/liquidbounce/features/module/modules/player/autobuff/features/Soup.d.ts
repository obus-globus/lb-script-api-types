import type { Continuation } from '../../../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { HealthBasedBuff } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/HealthBasedBuff.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Soup extends HealthBasedBuff {
    static INSTANCE: Soup;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    execute(slot: HotbarItemSlot, $completion: Continuation<void>): any;
    isValidItem(stack: ItemStack, forUse: boolean): boolean;
}