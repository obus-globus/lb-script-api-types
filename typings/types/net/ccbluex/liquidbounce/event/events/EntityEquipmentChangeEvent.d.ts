import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * Fires when an entity's equipment changes in a slot, exposing the entity, the equipment slot and the item.
 */
export class EntityEquipmentChangeEvent extends Event {
    constructor(entity: LivingEntity, equipmentSlot: EquipmentSlot, itemStack: ItemStack)
    readonly entity: LivingEntity;
    readonly equipmentSlot: EquipmentSlot;
    readonly itemStack: ItemStack;
}