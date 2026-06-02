import type { BidirectionalIterator } from '../../../../it/unimi/dsi/fastutil/BidirectionalIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BigListIterator<K extends Object | number | string | boolean> extends BidirectionalIterator<K>, Object{
    add(arg0: K): void;
    nextIndex(): number;
    previousIndex(): number;
    set(arg0: K): void;
}