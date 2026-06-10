import type { BigListIterator } from '../../../../../it/unimi/dsi/fastutil/BigListIterator.d.ts'
import type { LongBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LongBigListIterator extends BigListIterator<number>, LongBidirectionalIterator, Object{
    add(arg0: number): void;
    back(arg0: number): number;
    previous(): number;
    set(arg0: number): void;
    skip(arg0: number): number;
}