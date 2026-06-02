import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapDifference$ValueDifference<V extends Object | number | string | boolean> extends Object{
    leftValue(): V;
    rightValue(): V;
}