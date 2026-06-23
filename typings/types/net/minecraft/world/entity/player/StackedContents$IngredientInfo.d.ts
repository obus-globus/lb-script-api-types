import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface StackedContents$IngredientInfo<T extends unknown> extends Object{
    acceptsItem(item: T): boolean;
}