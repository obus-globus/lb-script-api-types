import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { ItemPredicate } from '../../../../../net/minecraft/advancements/predicates/ItemPredicate.d.ts'
import type { ItemPredicate$Builder } from '../../../../../net/minecraft/advancements/predicates/ItemPredicate$Builder.d.ts'
import type { Criterion } from '../../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { EnterBlockTrigger$TriggerInstance } from '../../../../../net/minecraft/advancements/triggers/EnterBlockTrigger$TriggerInstance.d.ts'
import type { InventoryChangeTrigger$TriggerInstance } from '../../../../../net/minecraft/advancements/triggers/InventoryChangeTrigger$TriggerInstance.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { RecipeOutput } from '../../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { RecipeProvider } from '../../../../../net/minecraft/data/recipes/RecipeProvider.d.ts'
import type { VanillaRecipeProvider$TrimTemplate } from '../../../../../net/minecraft/data/recipes/packs/VanillaRecipeProvider$TrimTemplate.d.ts'
import type { ItemLike } from '../../../../../net/minecraft/world/level/ItemLike.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class VanillaRecipeProvider extends RecipeProvider {
    static getBlastingRecipeName(paramproduct: ItemLike): string;
    static getConversionRecipeName(paramproduct: ItemLike, parammaterial: ItemLike): string;
    static getHasName(parambaseBlock: ItemLike): string;
    static getItemName(paramitemLike: ItemLike): string;
    static getSimpleRecipeName(paramitemLike: ItemLike): string;
    static getSmeltingRecipeName(paramproduct: ItemLike): string;
    static insideOf(paramblock: Block): Criterion<EnterBlockTrigger$TriggerInstance>;
    static inventoryTrigger(...parampredicates: ItemPredicate$Builder[]): Criterion<InventoryChangeTrigger$TriggerInstance>;
    static inventoryTrigger(...parampredicates: ItemPredicate[]): Criterion<InventoryChangeTrigger$TriggerInstance>;
    static smithingTrims(): Stream<VanillaRecipeProvider$TrimTemplate>;
    private constructor(registries: HolderLookup$Provider, output: RecipeOutput)
    buildRecipes(): void;
}