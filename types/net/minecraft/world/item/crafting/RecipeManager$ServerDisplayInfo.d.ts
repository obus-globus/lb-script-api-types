import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RecipeHolder } from '../../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { RecipeDisplayEntry } from '../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayEntry.d.ts'
export class RecipeManager$ServerDisplayInfo extends Record {
    constructor(display: RecipeDisplayEntry, parent: RecipeHolder<Object>)
    // private display: RecipeDisplayEntry;
    // private parent: RecipeHolder<Object>;
    display(): RecipeDisplayEntry;
    equals(o: Object | null): boolean;
    hashCode(): number;
    parent(): RecipeHolder<Object>;
    toString(): string;
}