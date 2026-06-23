import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { LootTable } from '../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class VanillaChargedCreeperExplosionLoot$Entry extends Record {
    private constructor(lootTable: ResourceKey<LootTable>, entityType: EntityType<any>, item: Item)
    // private entityType: EntityType<any>;
    // private item: Item;
    // private lootTable: ResourceKey<LootTable>;
    entityType(): EntityType<any>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): Item;
    lootTable(): ResourceKey<LootTable>;
    toString(): string;
}