import type { Buff } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/Buff.d.ts'
import type { StatusEffectBasedBuff$Potions } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/StatusEffectBasedBuff$Potions.d.ts'
import type { MobEffectInstance } from '../../../../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export abstract class StatusEffectBasedBuff extends Buff {
    constructor(name: string)
    // private potions: StatusEffectBasedBuff$Potions;
    protected foundTargetEffect(effect: MobEffectInstance, health: number): boolean;
    isValidItem(stack: ItemStack, forUse: boolean): boolean;
    protected isValidPotion(stack: ItemStack): boolean;
}