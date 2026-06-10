import type { BigListIterator } from '../../../../../it/unimi/dsi/fastutil/BigListIterator.d.ts'
import type { FloatBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatBigListIterator extends BigListIterator<number>, FloatBidirectionalIterator, Object{
    add(arg0: number): void;
    back(arg0: number): number;
    previous(): number;
    set(arg0: number): void;
    skip(arg0: number): number;
}