import type { Continuation } from '../../../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { StatusEffectBasedBuff } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/StatusEffectBasedBuff.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Drink extends StatusEffectBasedBuff {
    static INSTANCE: Drink;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    execute(slot: HotbarItemSlot, $completion: Continuation<void>): any;
    protected isValidPotion(stack: ItemStack): boolean;
}