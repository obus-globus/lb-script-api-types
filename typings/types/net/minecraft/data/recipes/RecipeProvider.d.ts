import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
import type { BredAnimalsTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/triggers/BredAnimalsTrigger$TriggerInstance.d.ts'
import type { Criterion } from '../../../../net/minecraft/advancements/triggers/Criterion.d.ts'
import type { EnterBlockTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/triggers/EnterBlockTrigger$TriggerInstance.d.ts'
import type { InventoryChangeTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/triggers/InventoryChangeTrigger$TriggerInstance.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { BlockFamily } from '../../../../net/minecraft/data/BlockFamily.d.ts'
import type { BlockFamily$Variant } from '../../../../net/minecraft/data/BlockFamily$Variant.d.ts'
import type { RecipeBuilder } from '../../../../net/minecraft/data/recipes/RecipeBuilder.d.ts'
import type { RecipeCategory } from '../../../../net/minecraft/data/recipes/RecipeCategory.d.ts'
import type { RecipeOutput } from '../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { ShapedRecipeBuilder } from '../../../../net/minecraft/data/recipes/ShapedRecipeBuilder.d.ts'
import type { ShapelessRecipeBuilder } from '../../../../net/minecraft/data/recipes/ShapelessRecipeBuilder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStackTemplate } from '../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { AbstractCookingRecipe } from '../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe.d.ts'
import type { AbstractCookingRecipe$CookingBookInfo } from '../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe$CookingBookInfo.d.ts'
import type { AbstractCookingRecipe$Factory } from '../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe$Factory.d.ts'
import type { CookingBookCategory } from '../../../../net/minecraft/world/item/crafting/CookingBookCategory.d.ts'
import type { Ingredient } from '../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { Recipe$CommonInfo } from '../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
import type { TrimPattern } from '../../../../net/minecraft/world/item/equipment/trim/TrimPattern.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { SuspiciousEffectHolder } from '../../../../net/minecraft/world/level/block/SuspiciousEffectHolder.d.ts'
export abstract class RecipeProvider extends Object {
    static getBlastingRecipeName(paramproduct: ItemLike): string;
    static getConversionRecipeName(paramproduct: ItemLike, parammaterial: ItemLike): string;
    static getHasName(parambaseBlock: ItemLike): string;
    static getItemName(paramitemLike: ItemLike): string;
    static getSimpleRecipeName(paramitemLike: ItemLike): string;
    static getSmeltingRecipeName(paramproduct: ItemLike): string;
    static insideOf(paramblock: Block): Criterion<EnterBlockTrigger$TriggerInstance>;
    static inventoryTrigger(...parampredicates: (Object | null)[]): Criterion<InventoryChangeTrigger$TriggerInstance>;
    static inventoryTrigger(...parampredicates: (Object | null)[]): Criterion<InventoryChangeTrigger$TriggerInstance>;
    constructor(registries: HolderLookup$Provider, output: RecipeOutput)
    // private items: HolderGetter<Item>;
    // private output: RecipeOutput;
    // private registries: HolderLookup$Provider;
    banner(result: ItemLike, wool: ItemLike): void;
    bedFromPlanksAndWool(result: ItemLike, wool: ItemLike): void;
    bredAnimal(): Criterion<BredAnimalsTrigger$TriggerInstance>;
    bricksBuilder(category: RecipeCategory, result: ItemLike, base: Ingredient): RecipeBuilder;
    buildRecipes(): void;
    buttonBuilder(result: ItemLike, base: Ingredient): RecipeBuilder;
    candle(result: ItemLike, dye: ItemLike): void;
    carpet(result: ItemLike, sourceItem: ItemLike): void;
    chestBoat(chestBoat: ItemLike, boat: ItemLike): void;
    chiseled(category: RecipeCategory, result: ItemLike, base: ItemLike): void;
    chiseledBuilder(category: RecipeCategory, result: ItemLike, base: Ingredient): ShapedRecipeBuilder;
    colorItemWithDye(dyes: Item[], items: Item[], groupName: string, category: RecipeCategory): void;
    colorWithDye(dyes: Item[], dyedItems: Item[], uncoloredItem: Item, groupName: string, category: RecipeCategory): void;
    coloredTerracottaFromTerracottaAndDye(result: ItemLike, dye: ItemLike): void;
    concretePowder(result: ItemLike, dye: ItemLike): void;
    cookRecipes<T extends AbstractCookingRecipe>(source: string, factory: (param0: Recipe$CommonInfo, param1: AbstractCookingRecipe$CookingBookInfo, param2: Ingredient, param3: ItemStackTemplate, param4: number, param5: number) => T, cookingTime: number): void;
    copperBulb(copperBulb: Block, copperMaterial: Block): void;
    copySmithingTemplate(smithingTemplate: ItemLike, baseMaterials: Ingredient): void;
    copySmithingTemplate(smithingTemplate: ItemLike, baseMaterial: ItemLike): void;
    cut(category: RecipeCategory, result: ItemLike, base: ItemLike): void;
    cutBuilder(category: RecipeCategory, result: ItemLike, base: Ingredient): ShapedRecipeBuilder;
    doorBuilder(result: ItemLike, base: Ingredient): RecipeBuilder;
    dryGhast(result: ItemLike): void;
    dyedBundleRecipe(dye: Item, dyedResult: Item): void;
    dyedItem(target: Item, group: string): void;
    dyedShulkerBoxRecipe(dye: Item, dyedResult: Item): void;
    fenceBuilder(result: ItemLike, base: Ingredient): RecipeBuilder;
    fenceGateBuilder(result: ItemLike, planks: Ingredient): RecipeBuilder;
    generateCraftingRecipe(family: BlockFamily, variant: BlockFamily$Variant, result: Block, base: ItemLike): void;
    generateForEnabledBlockFamilies(flagSet: FeatureFlagSet): void;
    generateRecipes(family: BlockFamily, flagSet: FeatureFlagSet): void;
    generateSmeltingRecipe(variant: BlockFamily$Variant, result: Block, base: ItemLike): void;
    generateStonecutterRecipe(family: BlockFamily, variant: BlockFamily$Variant, base: Block): void;
    getBaseBlockForCrafting(family: BlockFamily, variant: BlockFamily$Variant): Block;
    getCraftingCriterionName(family: BlockFamily, variant: BlockFamily$Variant, base: ItemLike): string;
    grate(grateBlock: Block, material: Block): void;
    hangingSignBuilder(result: ItemLike, ingredient: Ingredient): RecipeBuilder;
    harness(result: ItemLike, wool: ItemLike): void;
    has(count: MinMaxBounds$Ints, item: ItemLike): Criterion<InventoryChangeTrigger$TriggerInstance>;
    has(tag: TagKey<Item>): Criterion<InventoryChangeTrigger$TriggerInstance>;
    has(item: ItemLike): Criterion<InventoryChangeTrigger$TriggerInstance>;
    mosaicBuilder(category: RecipeCategory, result: ItemLike, base: ItemLike): void;
    netheriteSmithing(base: Item, category: RecipeCategory, result: Item): void;
    nineBlockStorageRecipes(unpackedFormCategory: RecipeCategory, unpackedForm: ItemLike, packedFormCategory: RecipeCategory, packedForm: ItemLike): void;
    nineBlockStorageRecipes(unpackedFormCategory: RecipeCategory, unpackedForm: ItemLike, packedFormCategory: RecipeCategory, packedForm: ItemLike, packingRecipeId: string, packingRecipeGroup: string, unpackingRecipeId: string, unpackingRecipeGroup: string): void;
    nineBlockStorageRecipesRecipesWithCustomUnpacking(unpackedFormCategory: RecipeCategory, unpackedForm: ItemLike, packedFormCategory: RecipeCategory, packedForm: ItemLike, unpackingRecipeId: string, unpackingRecipeGroup: string): void;
    nineBlockStorageRecipesWithCustomPacking(unpackedFormCategory: RecipeCategory, unpackedForm: ItemLike, packedFormCategory: RecipeCategory, packedForm: ItemLike, packingRecipeId: string, packingRecipeGroup: string): void;
    oneToOneConversionRecipe(product: ItemLike, resource: ItemLike, group: string): void;
    oneToOneConversionRecipe(product: ItemLike, resource: ItemLike, group: string, productCount: number): void;
    oreBlasting(smeltables: ItemLike[], craftingCategory: RecipeCategory, cookingCategory: CookingBookCategory, result: ItemLike, experience: number, cookingTime: number, group: string): void;
    oreCooking<T extends AbstractCookingRecipe>(factory: (param0: Recipe$CommonInfo, param1: AbstractCookingRecipe$CookingBookInfo, param2: Ingredient, param3: ItemStackTemplate, param4: number, param5: number) => T, smeltables: ItemLike[], craftingCategory: RecipeCategory, cookingCategory: CookingBookCategory, result: ItemLike, experience: number, cookingTime: number, group: string, fromDesc: string): void;
    oreSmelting(smeltables: ItemLike[], craftingCategory: RecipeCategory, cookingCategory: CookingBookCategory, result: ItemLike, experience: number, cookingTime: number, group: string): void;
    pillarBuilder(category: RecipeCategory, result: ItemLike, base: Ingredient): RecipeBuilder;
    planksFromLog(result: ItemLike, logs: TagKey<Item>, count: number): void;
    planksFromLogs(result: ItemLike, logs: TagKey<Item>, count: number): void;
    polished(category: RecipeCategory, result: ItemLike, base: ItemLike): void;
    polishedBuilder(category: RecipeCategory, result: ItemLike, base: Ingredient): RecipeBuilder;
    pressurePlate(result: ItemLike, base: ItemLike): void;
    pressurePlateBuilder(category: RecipeCategory, result: ItemLike, base: Ingredient): RecipeBuilder;
    shaped(category: RecipeCategory, item: ItemLike): ShapedRecipeBuilder;
    shaped(category: RecipeCategory, item: ItemLike, count: number): ShapedRecipeBuilder;
    shapeless(category: RecipeCategory, result: ItemStackTemplate): ShapelessRecipeBuilder;
    shapeless(category: RecipeCategory, item: ItemLike): ShapelessRecipeBuilder;
    shapeless(category: RecipeCategory, item: ItemLike, count: number): ShapelessRecipeBuilder;
    shelf(result: ItemLike, strippedLogs: ItemLike): void;
    signBuilder(result: ItemLike, planks: Ingredient): RecipeBuilder;
    simpleCookingRecipe<T extends AbstractCookingRecipe>(source: string, factory: (param0: Recipe$CommonInfo, param1: AbstractCookingRecipe$CookingBookInfo, param2: Ingredient, param3: ItemStackTemplate, param4: number, param5: number) => T, cookingTime: number, base: ItemLike, result: ItemLike, experience: number): void;
    slab(category: RecipeCategory, result: ItemLike, base: ItemLike): void;
    slabBuilder(category: RecipeCategory, result: ItemLike, base: Ingredient): RecipeBuilder;
    smeltingResultFromBase(result: ItemLike, base: ItemLike): void;
    stainedGlassFromGlassAndDye(result: ItemLike, dye: ItemLike): void;
    stainedGlassPaneFromGlassPaneAndDye(result: ItemLike, dye: ItemLike): void;
    stainedGlassPaneFromStainedGlass(result: ItemLike, stainedGlass: ItemLike): void;
    stairBuilder(result: ItemLike, base: Ingredient): RecipeBuilder;
    stonecutterResultFromBase(category: RecipeCategory, result: ItemLike, base: ItemLike): void;
    stonecutterResultFromBase(category: RecipeCategory, result: ItemLike, base: ItemLike, count: number): void;
    suspiciousStew(item: Item, effectHolder: SuspiciousEffectHolder): void;
    tag(id: TagKey<Item>): Ingredient;
    threeByThreePacker(category: RecipeCategory, result: ItemLike, ingredient: ItemLike): void;
    threeByThreePacker(category: RecipeCategory, result: ItemLike, ingredient: ItemLike, unlockedBy: string): void;
    tilesBuilder(category: RecipeCategory, result: ItemLike, base: Ingredient): RecipeBuilder;
    trapdoorBuilder(result: ItemLike, base: Ingredient): RecipeBuilder;
    trimSmithing(trimTemplate: Item, patternId: ResourceKey<TrimPattern>, id: ResourceKey<Recipe<any>>): void;
    twoByTwoPacker(category: RecipeCategory, result: ItemLike, ingredient: ItemLike): void;
    wall(category: RecipeCategory, result: ItemLike, base: ItemLike): void;
    wallBuilder(category: RecipeCategory, result: ItemLike, base: Ingredient): RecipeBuilder;
    waxRecipes(flagSet: FeatureFlagSet): void;
    waxedChiseled(result: Block, material: Block): void;
    woodFromLogs(result: ItemLike, log: ItemLike): void;
    woodenBoat(result: ItemLike, planks: ItemLike): void;
}