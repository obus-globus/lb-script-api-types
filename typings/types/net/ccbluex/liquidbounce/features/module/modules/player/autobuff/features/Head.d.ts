import type { Continuation } from '../../../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { HealthBasedBuff } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/HealthBasedBuff.d.ts'
import type { Chronometer } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Head extends HealthBasedBuff {
    static INSTANCE: Head;
    // private chronometer: Chronometer;
    // private cooldown: number;
    // private /*not mapped: */ getCooldown(): number;
    // private maxAbsorption: number;
    // private /*not mapped: */ getMaxAbsorption(): number;
    /*not mapped: */ getPassesRequirements$net_ccbluex_liquidbounce(): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    execute(slot: HotbarItemSlot, $completion: Continuation<void>): any;
    isValidItem(stack: ItemStack, forUse: boolean): boolean;
}