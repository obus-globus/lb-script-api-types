import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { TrimPattern } from '../../../../../net/minecraft/world/item/equipment/trim/TrimPattern.d.ts'
export class VanillaRecipeProvider$TrimTemplate extends Record {
    constructor(template: Item, patternId: ResourceKey<TrimPattern>, recipeId: ResourceKey<Recipe<Object>>)
    // private patternId: ResourceKey<TrimPattern>;
    // private recipeId: ResourceKey<Recipe<Object>>;
    // private template: Item;
    equals(o: Object | null): boolean;
    hashCode(): number;
    patternId(): ResourceKey<TrimPattern>;
    recipeId(): ResourceKey<Recipe<Object>>;
    template(): Item;
    toString(): string;
}