import type { BigListIterator } from '../../../../../it/unimi/dsi/fastutil/BigListIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ObjectBigListIterator<K extends Object | number | string | boolean> extends BigListIterator<K>, ObjectBidirectionalIterator<K>, Object{
    add(arg0: K): void;
    add(arg0: K): void;
    back(arg0: number): number;
    back(arg0: number): number;
    set(arg0: K): void;
    set(arg0: K): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
    skip(arg0: number): number;
}