import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { CraftingBookCategory } from '../../../../../net/minecraft/world/item/crafting/CraftingBookCategory.d.ts'
import type { CraftingInput } from '../../../../../net/minecraft/world/item/crafting/CraftingInput.d.ts'
import type { CraftingRecipe } from '../../../../../net/minecraft/world/item/crafting/CraftingRecipe.d.ts'
import type { CraftingRecipe$CraftingBookInfo } from '../../../../../net/minecraft/world/item/crafting/CraftingRecipe$CraftingBookInfo.d.ts'
import type { PlacementInfo } from '../../../../../net/minecraft/world/item/crafting/PlacementInfo.d.ts'
import type { Recipe$CommonInfo } from '../../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
import type { RecipeBookCategory } from '../../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { RecipeType } from '../../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
export abstract class NormalCraftingRecipe extends Object implements CraftingRecipe {
    static CODEC: Codec<Object>;
    static KEY_CODEC: Codec<Object>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static defaultCraftingReminder(paraminput: CraftingInput): ItemStack[];
    constructor(commonInfo: Recipe$CommonInfo, bookInfo: CraftingRecipe$CraftingBookInfo)
    // private bookInfo: CraftingRecipe$CraftingBookInfo;
    // private commonInfo: Recipe$CommonInfo;
    // private placementInfo: PlacementInfo;
    category(): CraftingBookCategory;
    createPlacementInfo(): PlacementInfo;
    getRemainingItems(input: CraftingInput): ItemStack[];
    getSerializer(): RecipeSerializer<NormalCraftingRecipe>;
    getType(): RecipeType<CraftingRecipe>;
    group(): string;
    placementInfo(): PlacementInfo;
    recipeBookCategory(): RecipeBookCategory;
    showNotification(): boolean;
}