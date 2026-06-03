import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RecipeCraftedTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/RecipeCraftedTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
export class RecipeCraftedTrigger extends SimpleCriterionTrigger<RecipeCraftedTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<RecipeCraftedTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: RecipeCraftedTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, id: ResourceKey<Recipe<Object>>, usedIngredients: ItemStack[]): void;
}