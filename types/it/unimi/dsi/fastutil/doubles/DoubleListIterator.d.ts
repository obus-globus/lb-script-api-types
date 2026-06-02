import type { DoubleBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export interface DoubleListIterator extends DoubleBidirectionalIterator, Object, ListIterator<number>{
    add(arg0: number): void;
    add(arg0: number): void;
    back(arg0: number): number;
    next(): number;
    previous(): number;
    previous(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
    skip(arg0: number): number;
}