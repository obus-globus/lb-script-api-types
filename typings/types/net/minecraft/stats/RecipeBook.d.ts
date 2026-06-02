import type { Object } from '../../../java/lang/Object.d.ts'
import type { RecipeBookSettings } from '../../../net/minecraft/stats/RecipeBookSettings.d.ts'
import type { RecipeBookType } from '../../../net/minecraft/world/inventory/RecipeBookType.d.ts'
export class RecipeBook extends Object {
    constructor()
    readonly bookSettings: RecipeBookSettings;
    getBookSettings(): RecipeBookSettings;
    isFiltering(type: RecipeBookType): boolean;
    isOpen(recipeBookType: RecipeBookType): boolean;
    setBookSetting(bookType: RecipeBookType, open: boolean, filtering: boolean): void;
    setBookSettings(settings: RecipeBookSettings): void;
    setFiltering(type: RecipeBookType, filtering: boolean): void;
    setOpen(recipeBookType: RecipeBookType, open: boolean): void;
}