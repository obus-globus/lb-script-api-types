import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { OptionalInt } from '../../../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ContextMap } from '../../../../../../net/minecraft/util/context/ContextMap.d.ts'
import type { StackedItemContents } from '../../../../../../net/minecraft/world/entity/player/StackedItemContents.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Ingredient } from '../../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { RecipeBookCategory } from '../../../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
import type { RecipeDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
import type { RecipeDisplayId } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayId.d.ts'
export class RecipeDisplayEntry extends Record {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, RecipeDisplayEntry>;
    constructor(id: RecipeDisplayId, display: RecipeDisplay, group: OptionalInt, category: RecipeBookCategory, craftingRequirements: Optional<Ingredient[]>)
    // private category: RecipeBookCategory;
    // private craftingRequirements: Optional<Ingredient[]>;
    // private display: RecipeDisplay;
    // private group: OptionalInt;
    // private id: RecipeDisplayId;
    canCraft(providedContents: StackedItemContents): boolean;
    category(): RecipeBookCategory;
    craftingRequirements(): Optional<Ingredient[]>;
    display(): RecipeDisplay;
    equals(o: Object | null): boolean;
    group(): OptionalInt;
    hashCode(): number;
    id(): RecipeDisplayId;
    resultItems(context: ContextMap): ItemStack[];
    toString(): string;
}