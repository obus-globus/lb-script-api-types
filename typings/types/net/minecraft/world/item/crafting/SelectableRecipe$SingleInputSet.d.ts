import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { SelectableRecipe$SingleInputEntry } from '../../../../../net/minecraft/world/item/crafting/SelectableRecipe$SingleInputEntry.d.ts'
export class SelectableRecipe$SingleInputSet<T extends Recipe<any>> extends Record {
    static empty<T extends Recipe<any>>(): SelectableRecipe$SingleInputSet<T>;
    static noRecipeCodec<T extends Recipe<any>>(): StreamCodec<RegistryFriendlyByteBuf, SelectableRecipe$SingleInputSet<T>>;
    constructor(entries: SelectableRecipe$SingleInputEntry<T>[])
    // private entries: SelectableRecipe$SingleInputEntry<T>[];
    acceptsInput(input: ItemStack): boolean;
    entries(): SelectableRecipe$SingleInputEntry<T>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    selectByInput(input: ItemStack): SelectableRecipe$SingleInputSet<T>;
    size(): number;
    toString(): string;
}