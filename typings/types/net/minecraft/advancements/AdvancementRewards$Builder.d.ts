import type { ImmutableList$Builder } from '../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AdvancementRewards } from '../../../net/minecraft/advancements/AdvancementRewards.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Recipe } from '../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { LootTable } from '../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class AdvancementRewards$Builder extends Object {
    static experience(paramamount: number): AdvancementRewards$Builder;
    static function(paramid: Identifier): AdvancementRewards$Builder;
    static loot(paramid: ResourceKey<LootTable>): AdvancementRewards$Builder;
    static recipe(paramid: ResourceKey<Recipe<any>>): AdvancementRewards$Builder;
    constructor()
    // private experience: number;
    // private function: Optional<Identifier>;
    // private loot: ImmutableList$Builder<ResourceKey<LootTable>>;
    // private recipes: ImmutableList$Builder<ResourceKey<Recipe<any>>>;
    addExperience(amount: number): AdvancementRewards$Builder;
    addLootTable(id: ResourceKey<LootTable>): AdvancementRewards$Builder;
    addRecipe(id: ResourceKey<Recipe<any>>): AdvancementRewards$Builder;
    build(): AdvancementRewards;
    runs(function_: Identifier): AdvancementRewards$Builder;
}