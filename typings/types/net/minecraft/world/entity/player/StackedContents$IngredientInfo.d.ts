import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface StackedContents$IngredientInfo<T extends Object | number | string | boolean> extends Object{
    acceptsItem(item: T): boolean;
}