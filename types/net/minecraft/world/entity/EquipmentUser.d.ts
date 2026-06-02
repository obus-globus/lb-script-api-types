import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { EquipmentSlot } from '../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { EquipmentTable } from '../../../../net/minecraft/world/entity/EquipmentTable.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootParams } from '../../../../net/minecraft/world/level/storage/loot/LootParams.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export interface EquipmentUser extends Object{
    equip(lootTable: ResourceKey<LootTable>, lootParams: LootParams, optionalLootTableSeed: number, dropChances: { [key in EquipmentSlot]: number }): void;
    equip(lootTable: ResourceKey<LootTable>, lootParams: LootParams, dropChances: { [key in EquipmentSlot]: number }): void;
    equip(equipment: EquipmentTable, lootParams: LootParams): void;
    getItemBySlot(slot: EquipmentSlot): ItemStack;
    resolveSlot(toEquip: ItemStack, alreadyInsertedIntoSlots: EquipmentSlot[]): EquipmentSlot;
    setDropChance(slot: EquipmentSlot, dropChance: number): void;
    setItemSlot(slot: EquipmentSlot, stack: ItemStack): void;
}