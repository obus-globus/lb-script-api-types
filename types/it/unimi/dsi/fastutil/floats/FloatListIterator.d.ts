import type { FloatBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export interface FloatListIterator extends FloatBidirectionalIterator, Object, ListIterator<number>{
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