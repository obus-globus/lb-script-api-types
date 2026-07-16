import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { EquipmentSlot } from '../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class EquipmentTable extends Record {
    static CODEC: Codec<EquipmentTable>;
    static DROP_CHANCES_CODEC: Codec<Map<EquipmentSlot, number>>;
    constructor(lootTable: ResourceKey<LootTable>, dropChance: number)
    constructor(lootTable: ResourceKey<LootTable>, slotDropChances: Map<EquipmentSlot, number>)
    // private lootTable: ResourceKey<LootTable>;
    // private slotDropChances: Map<EquipmentSlot, number>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    lootTable(): ResourceKey<LootTable>;
    slotDropChances(): Map<EquipmentSlot, number>;
    toString(): string;
}