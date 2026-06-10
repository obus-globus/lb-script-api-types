import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { CraftingInput } from '../../../../../../net/minecraft/world/item/crafting/CraftingInput.d.ts'
import type { CustomRecipe } from '../../../../../../net/minecraft/world/item/crafting/CustomRecipe.d.ts'
import type { Recipe } from '../../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeSerializer } from '../../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class ShulkerBoxColoringRecipe extends CustomRecipe {
    static CODEC: Codec<Recipe<Object>>;
    static KEY_CODEC: Codec<ResourceKey<Recipe<Object>>>;
    static SERIALIZER: RecipeSerializer<ShulkerBoxColoringRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Recipe<Object>>;
    constructor()
    assemble(arg0: CraftingInput): ItemStack;
    getSerializer(): RecipeSerializer<ShulkerBoxColoringRecipe>;
    matches(arg0: CraftingInput, arg1: Level): boolean;
}