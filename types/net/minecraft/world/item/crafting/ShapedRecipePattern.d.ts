import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { CraftingInput } from '../../../../../net/minecraft/world/item/crafting/CraftingInput.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { ShapedRecipePattern$Data } from '../../../../../net/minecraft/world/item/crafting/ShapedRecipePattern$Data.d.ts'
export class ShapedRecipePattern extends Object {
    static EMPTY_SLOT: string;
    static MAP_CODEC: MapCodec<ShapedRecipePattern>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ShapedRecipePattern>;
    static of(paramkey: { [key: string]: Ingredient }, parampattern: (Object | null)[]): ShapedRecipePattern;
    static of(paramkey: { [key: string]: Ingredient }, parampattern: string[]): ShapedRecipePattern;
    constructor(width: number, height: number, ingredients: Optional<Ingredient>[], data: Optional<ShapedRecipePattern$Data>)
    // private data: Optional<ShapedRecipePattern$Data>;
    // private height: number;
    // private ingredientCount: number;
    // private ingredients: Optional<Ingredient>[];
    // private symmetrical: boolean;
    // private width: number;
    height(): number;
    ingredients(): Optional<Ingredient>[];
    matches(input: CraftingInput): boolean;
    // private matches(input: CraftingInput, xFlip: boolean): boolean;
    width(): number;
}