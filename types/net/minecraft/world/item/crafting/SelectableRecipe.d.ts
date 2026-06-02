import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeHolder } from '../../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { SlotDisplay } from '../../../../../net/minecraft/world/item/crafting/display/SlotDisplay.d.ts'
export class SelectableRecipe<T extends Recipe<Object>> extends Record {
    static noRecipeCodec(): StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(optionDisplay: SlotDisplay, recipe: Optional<RecipeHolder<T>>)
    // private optionDisplay: SlotDisplay;
    // private recipe: Optional<RecipeHolder<T>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    optionDisplay(): SlotDisplay;
    recipe(): Optional<RecipeHolder<T>>;
    toString(): string;
}