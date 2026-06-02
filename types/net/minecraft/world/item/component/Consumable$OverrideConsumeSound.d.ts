import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface Consumable$OverrideConsumeSound extends Object{
    getConsumeSound(itemStack: ItemStack): SoundEvent;
}