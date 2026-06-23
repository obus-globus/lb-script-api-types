import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapDifference$ValueDifference<V extends unknown> extends Object{
    leftValue(): V;
    rightValue(): V;
}