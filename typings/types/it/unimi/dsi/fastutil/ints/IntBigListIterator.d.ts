import type { BigListIterator } from '../../../../../it/unimi/dsi/fastutil/BigListIterator.d.ts'
import type { IntBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IntBigListIterator extends BigListIterator<number>, IntBidirectionalIterator, Object{
    add(arg0: number): void;
    back(arg0: number): number;
    previous(): number;
    set(arg0: number): void;
    skip(arg0: number): number;
}