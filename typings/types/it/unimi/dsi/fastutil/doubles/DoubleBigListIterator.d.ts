import type { BigListIterator } from '../../../../../it/unimi/dsi/fastutil/BigListIterator.d.ts'
import type { DoubleBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DoubleBigListIterator extends BigListIterator<number>, DoubleBidirectionalIterator, Object{
    add(arg0: number): void;
    back(arg0: number): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    set(arg0: number): void;
    skip(arg0: number): number;
}