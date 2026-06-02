import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { ItemPredicate } from '../../../../net/minecraft/advancements/criterion/ItemPredicate.d.ts'
import type { ItemPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/ItemPredicate$Builder.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class RecipeCraftedTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<RecipeCraftedTrigger$TriggerInstance>;
    static craftedItem(paramrecipeId: ResourceKey<Object>): Criterion<RecipeCraftedTrigger$TriggerInstance>;
    static craftedItem(paramrecipeId: ResourceKey<Object>, parampredicates: ItemPredicate$Builder[]): Criterion<RecipeCraftedTrigger$TriggerInstance>;
    static crafterCraftedItem(paramrecipeId: ResourceKey<Object>): Criterion<RecipeCraftedTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, recipeId: ResourceKey<Recipe<Object>>, ingredients: ItemPredicate[])
    // private ingredients: ItemPredicate[];
    // private player: Optional<ContextAwarePredicate>;
    // private recipeId: ResourceKey<Recipe<Object>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    ingredients(): ItemPredicate[];
    // private matches(id: ResourceKey<Recipe<Object>>, usedIngredients: ItemStack[]): boolean;
    player(): Optional<ContextAwarePredicate>;
    recipeId(): ResourceKey<Recipe<Object>>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}