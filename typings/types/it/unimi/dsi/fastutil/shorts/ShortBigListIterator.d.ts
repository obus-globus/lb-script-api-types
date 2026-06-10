import type { BigListIterator } from '../../../../../it/unimi/dsi/fastutil/BigListIterator.d.ts'
import type { ShortBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ShortBigListIterator extends BigListIterator<number>, ShortBidirectionalIterator, Object{
    add(arg0: number): void;
    back(arg0: number): number;
    previous(): number;
    set(arg0: number): void;
    skip(arg0: number): number;
}