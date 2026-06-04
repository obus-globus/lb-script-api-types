import type { BigListIterator } from '../../../../../it/unimi/dsi/fastutil/BigListIterator.d.ts'
import type { BooleanBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanBigListIterator extends BigListIterator<boolean>, BooleanBidirectionalIterator, Object{
    add<K extends Object | number | string | boolean>(arg0: K): void;
    add(arg0: boolean): void;
    back(arg0: number): number;
    previous(): boolean;
    set<K extends Object | number | string | boolean>(arg0: K): void;
    set(arg0: boolean): void;
    skip(arg0: number): number;
}