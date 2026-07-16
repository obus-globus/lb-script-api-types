import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BlockFamily$Variant } from '../../../net/minecraft/data/BlockFamily$Variant.d.ts'
import type { Block } from '../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockFamily extends Object {
    private constructor(baseBlock: Block)
    readonly baseBlock: Block;
    // private generateCraftingRecipe: boolean;
    // private generateModel: boolean;
    // private generateSmeltingRecipe: boolean;
    // private generateStonecutterRecipe: boolean;
    readonly recipeGroupPrefix: string;
    readonly recipeUnlockedBy: string;
    readonly variants: Map<BlockFamily$Variant, Block>;
    get(variant: BlockFamily$Variant): Block;
    getBaseBlock(): Block;
    getRecipeGroupPrefix(): Optional<string>;
    getRecipeUnlockedBy(): Optional<string>;
    getVariants(): Map<BlockFamily$Variant, Block>;
    shouldGenerateCraftingRecipe(): boolean;
    shouldGenerateModel(): boolean;
    shouldGenerateSmeltingRecipe(): boolean;
    shouldGenerateStonecutterRecipe(): boolean;
}