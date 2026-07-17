import type { Continuation } from '../../../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { StatusEffectBasedBuff } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/StatusEffectBasedBuff.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { LivingEntity } from '../../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Pot extends StatusEffectBasedBuff {
    static INSTANCE: Pot;
    // private BENEFICIAL_SQUARE_RANGE: number;
    // private allowLingering: boolean;
    // private /*not mapped: */ getAllowLingering(): boolean;
    // private doNotBenefitOthers: boolean;
    // private /*not mapped: */ getDoNotBenefitOthers(): boolean;
    /*not mapped: */ getPassesRequirements$net_ccbluex_liquidbounce(): boolean;
    // private tillGroundDistance: number;
    // private /*not mapped: */ getTillGroundDistance(): number;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    execute(slot: HotbarItemSlot, $completion: Continuation<void>): any;
    // private hasBenefit(entity: LivingEntity): boolean;
    // private isSplashNearby(): boolean;
    // private isStandingInsideLingering(): boolean;
    protected isValidPotion(stack: ItemStack): boolean;
}