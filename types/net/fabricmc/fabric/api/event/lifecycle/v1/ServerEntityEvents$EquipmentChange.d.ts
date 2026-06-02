import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EquipmentSlot } from '../../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface ServerEntityEvents$EquipmentChange extends Object{
    onChange(arg0: LivingEntity, arg1: EquipmentSlot, arg2: ItemStack, arg3: ItemStack): void;
}