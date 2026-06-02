import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { VillagerProfession } from '../../../../../net/minecraft/world/entity/npc/villager/VillagerProfession.d.ts'
import type { ItemLike } from '../../../../../net/minecraft/world/level/ItemLike.d.ts'
import type { LootTable } from '../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class VillagerInteractionRegistries extends Object {
    static registerCompostable(paramarg0: ItemLike): void;
    static registerFood(paramarg0: ItemLike, paramarg1: number): void;
    static registerGatherableItem(paramarg0: ItemLike): void;
    static registerGiftLootTable(paramarg0: ResourceKey<VillagerProfession>, paramarg1: ResourceKey<LootTable>): void;
    private constructor()
}