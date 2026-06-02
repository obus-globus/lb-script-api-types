import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/Criterion.d.ts'
import type { RecipeUnlockedTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/RecipeUnlockedTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { RecipeHolder } from '../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
export class RecipeUnlockedTrigger extends SimpleCriterionTrigger<RecipeUnlockedTrigger$TriggerInstance> {
    static unlocked(paramrecipe: ResourceKey<Object>): Criterion<RecipeUnlockedTrigger$TriggerInstance>;
    constructor()
    codec(): Codec<RecipeUnlockedTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, recipe: RecipeHolder<Object>): void;
}