import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { FireworkExplosion$Shape } from '../../../../../net/minecraft/world/item/component/FireworkExplosion$Shape.d.ts'
import type { CraftingInput } from '../../../../../net/minecraft/world/item/crafting/CraftingInput.d.ts'
import type { CustomRecipe } from '../../../../../net/minecraft/world/item/crafting/CustomRecipe.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class FireworkStarRecipe extends CustomRecipe {
    static CODEC: Codec<Recipe<any>>;
    static KEY_CODEC: Codec<ResourceKey<Recipe<any>>>;
    static MAP_CODEC: MapCodec<FireworkStarRecipe>;
    static SERIALIZER: RecipeSerializer<FireworkStarRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, FireworkStarRecipe>;
    constructor(shapes: JavaMap<FireworkExplosion$Shape, Ingredient>, trail: Ingredient, twinkle: Ingredient, fuel: Ingredient, dye: Ingredient, result: ItemStackTemplate)
    // private dye: Ingredient;
    // private fuel: Ingredient;
    // private result: ItemStackTemplate;
    // private shapes: JavaMap<FireworkExplosion$Shape, Ingredient>;
    // private trail: Ingredient;
    // private twinkle: Ingredient;
    assemble(input: CraftingInput): ItemStack;
    // private findShape(itemStack: ItemStack): FireworkExplosion$Shape;
    getSerializer(): RecipeSerializer<FireworkStarRecipe>;
    matches(input: CraftingInput, level: Level): boolean;
}