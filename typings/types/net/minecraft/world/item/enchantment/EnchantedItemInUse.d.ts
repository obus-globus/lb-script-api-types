import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class EnchantedItemInUse extends Record {
    constructor(itemStack: ItemStack, inSlot: EquipmentSlot, owner: LivingEntity)
    constructor(itemStack: ItemStack, inSlot: EquipmentSlot, owner: LivingEntity, onBreak: (param0: Item) => void)
    // private inSlot: EquipmentSlot;
    // private itemStack: ItemStack;
    // private onBreak: (param0: Item) => void;
    // private owner: LivingEntity;
    equals(o: Object | null): boolean;
    hashCode(): number;
    inSlot(): EquipmentSlot;
    itemStack(): ItemStack;
    onBreak(): (param0: Item) => void;
    owner(): LivingEntity;
    toString(): string;
}