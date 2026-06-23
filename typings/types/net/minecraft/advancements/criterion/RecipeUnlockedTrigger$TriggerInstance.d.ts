import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextAwarePredicate } from '../../../../net/minecraft/advancements/criterion/ContextAwarePredicate.d.ts'
import type { SimpleCriterionTrigger$SimpleInstance } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger$SimpleInstance.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeHolder } from '../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class RecipeUnlockedTrigger$TriggerInstance extends Record implements SimpleCriterionTrigger$SimpleInstance {
    static CODEC: Codec<RecipeUnlockedTrigger$TriggerInstance>;
    constructor(player: Optional<ContextAwarePredicate>, recipe: ResourceKey<Recipe<any>>)
    // private player: Optional<ContextAwarePredicate>;
    // private recipe: ResourceKey<Recipe<any>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(recipe: RecipeHolder<any>): boolean;
    player(): Optional<ContextAwarePredicate>;
    recipe(): ResourceKey<Recipe<any>>;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}