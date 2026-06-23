import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export interface ObjectListIterator<K extends unknown> extends ObjectBidirectionalIterator<K>, Object, ListIterator<K>{
    add(arg0: K): void;
    back(arg0: number): number;
    remove(): void;
    set(arg0: K): void;
    skip(arg0: number): number;
}