import type { Object } from '../../../../java/lang/Object.d.ts'
export interface WeightedList$Selector<E extends unknown> extends Object{
    get(selection: number): E;
}