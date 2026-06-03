import type { BigListIterator } from '../../../../../it/unimi/dsi/fastutil/BigListIterator.d.ts'
import type { ShortBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ShortBigListIterator extends BigListIterator<number>, ShortBidirectionalIterator, Object{
    add<K extends Object | number | string | boolean>(arg0: K): void;
    add(arg0: number): void;
    add(arg0: number): void;
    back(arg0: number): number;
    back(arg0: number): number;
    back(arg0: number): number;
    previous(): number;
    set<K extends Object | number | string | boolean>(arg0: K): void;
    set(arg0: number): void;
    set(arg0: number): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
    skip(arg0: number): number;
}