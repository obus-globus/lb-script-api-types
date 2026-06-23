import type { Object } from '../../../java/lang/Object.d.ts'
export interface PlaceRecipeHelper$Output<T extends unknown> extends Object{
    addItemToSlot(item: T, gridIndex: number, gridXPos: number, gridYPos: number): void;
}