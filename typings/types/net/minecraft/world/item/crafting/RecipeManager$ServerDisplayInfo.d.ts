import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RecipeHolder } from '../../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { RecipeDisplayEntry } from '../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayEntry.d.ts'
export class RecipeManager$ServerDisplayInfo extends Record {
    constructor(display: RecipeDisplayEntry, parent: RecipeHolder<any>)
    // private display: RecipeDisplayEntry;
    // private parent: RecipeHolder<any>;
    display(): RecipeDisplayEntry;
    equals(o: Object | null): boolean;
    hashCode(): number;
    parent(): RecipeHolder<any>;
    toString(): string;
}