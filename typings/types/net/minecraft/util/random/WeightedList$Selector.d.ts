import type { Object } from '../../../../java/lang/Object.d.ts'
export interface WeightedList$Selector<E extends Object | number | string | boolean> extends Object{
    get(selection: number): E;
}